<script setup lang="ts">
import GoooLink from '../gooo/GoooLink.vue'
import Button from '../ui/button/Button.vue'
</script>

<template>
  <Button as-child variant="ghost" class="flex items-center justify-center">
    <GoooLink href="/">
      <span class="sr-only">Home</span>
      <img
        class="w-8 drop-shadow-2xl drop-shadow-green-300/40"
        src="/static/assets/img/goo_resized.webp"
        alt="A melting vue.js logo"
      />
      <p class="font-bold italic text-go drop-shadow-2xl drop-shadow-go/50 text-lg">Gooo</p>
    </GoooLink>
  </Button>
</template>

<style scoped></style>
