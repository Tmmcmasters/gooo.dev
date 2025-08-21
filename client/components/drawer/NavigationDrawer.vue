<script setup lang="ts">
import { IconMenuDeep } from '@tabler/icons-vue'
import Button from '../ui/button/Button.vue'
import Drawer from '../ui/drawer/Drawer.vue'
import DrawerTrigger from '../ui/drawer/DrawerTrigger.vue'
import DrawerContent from '../ui/drawer/DrawerContent.vue'
import DrawerHeader from '../ui/drawer/DrawerHeader.vue'
import DrawerTitle from '../ui/drawer/DrawerTitle.vue'
import DrawerDescription from '../ui/drawer/DrawerDescription.vue'
import DrawerFooter from '../ui/drawer/DrawerFooter.vue'
import DrawerClose from '../ui/drawer/DrawerClose.vue'
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <Button variant="ghost">
        <span class="sr-only">Drawer Button</span>
        <IconMenuDeep class="size-5 text-foreground" />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <div class="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <div class="p-4 pb-0">
          <div class="flex items-center justify-center space-x-2"></div>
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose as-child>
            <Button variant="outline"> Cancel </Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
</template>

<style scoped></style>
