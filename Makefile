.PHONY: build run templ notify-templ-proxy tailwind minify-tailwind build-inject-tw build-echo run-build run-vite gen-envs build-gen-envs build-gen-manifest gen-manifest docker-build docker-run

#To be used for development only and with the templ proxy
-include .env.dev

# Fail immediately on any command error
SHELL := /bin/sh -e

# Suppress the "Entering/Leaving directory" messages
MAKEFLAGS += --no-print-directory	

build-echo: 
	@go build -o ./tmp/main .

build-gen-envs:
	@go build -o generate-envs/generate-envs generate-envs/generate-envs.go

gen-envs:
	@./generate-envs/generate-envs

build-gen-manifest:
	@go build -o generate-manifest/generate-manifest generate-manifest/generate-manifest.go

gen-manifest:
	@generate-manifest/generate-manifest

build:
	$(MAKE) build-inject-tw
	$(MAKE) build-gen-manifest
	$(MAKE) build-gen-envs
	$(MAKE) gen-envs
	$(MAKE) minify-tailwind
	$(MAKE) inject-tw
	@npm run build
	$(MAKE) gen-manifest
	@templ generate
	$(MAKE) build-echo

docker-build:
	$(MAKE) build

docker-run:
	@docker build -t myapp .
	@docker run --rm -it -p 8080:8080 \
  myapp



run-build:
	@make build
	@ENV_FILE=.env.prod tmp/main

build-inject-tw: 
	@go build -o inject-tailwind/inject-tailwind inject-tailwind/inject-tailwind.go

inject-tw: 
	@inject-tailwind/inject-tailwind

templ: 
	@templ generate --watch --proxy=http://localhost:$(APP_PORT) --proxyport=$(TEMPL_PROXY_PORT) --open-browser=false --proxybind="0.0.0.0"

notify-templ-proxy:
	@templ generate --notify-proxy --proxyport=$(TEMPL_PROXY_PORT)

# watch-tailwind:
# 	@npx @tailwindcss/cli -i ./tailwind.css -o ./static/assets/css/output-tw.css --watch[=always]

tailwind: 
	@npx @tailwindcss/cli -i ./tailwind.css -o ./static/assets/css/output-tw.css

minify-tailwind: 
	@npx @tailwindcss/cli -i ./tailwind.css -o ./static/assets/css/output-tw.css --minify

run-vite: 
	@npm run dev

run:
	@make templ & sleep 1
	@$(MAKE) build-inject-tw
	@$(MAKE) build-gen-manifest
	@$(MAKE) run-vite & sleep 1
	@ENV_FILE=.env.dev air