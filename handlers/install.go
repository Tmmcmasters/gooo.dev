package handlers

import (
	"Gooo/helpers/gooo"
	serverPages "Gooo/server/pages"

	"github.com/labstack/echo/v4"
)

func Install(context echo.Context) error {
	return gooo.Render(context, 200, serverPages.Install())

}
