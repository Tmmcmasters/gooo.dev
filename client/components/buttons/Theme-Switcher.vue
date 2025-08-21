<script setup lang="ts">
import useThemeCookie from '@/composables/useThemeCookie'
import Button from '../ui/button/Button.vue'
import SunIcon from '../icons/SunIcon.vue'
import MoonIcon from '../icons/MoonIcon.vue'

const { isDark, changeColor } = useThemeCookie()
</script>

<template>
  <div class="flex justify-center items-center gap-x-5">
    <Button @click="changeColor" variant="ghost" size="icon">
      <SunIcon v-if="isDark" class="size-5 text-foreground" />
      <MoonIcon v-else class="size-5 text-foreground" />
    </Button>
  </div>
</template>

<style scoped></style>
