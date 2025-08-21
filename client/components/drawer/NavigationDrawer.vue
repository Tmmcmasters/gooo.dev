<script setup lang="ts">
import { IconMenuDeep } from '@tabler/icons-vue'
import Button from '../ui/button/Button.vue'
import Drawer from '../ui/drawer/Drawer.vue'
import DrawerTrigger from '../ui/drawer/DrawerTrigger.vue'
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <Button variant="ghost">
        <span class="sr-only">Drawer Button</span>
        <IconMenuDeep class="size-5 text-foreground" />
      </Button>
    </DrawerTrigger>
  </Drawer>
</template>

<style scoped></style>
