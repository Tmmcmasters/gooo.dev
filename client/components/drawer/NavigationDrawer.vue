<script setup lang="ts">
import { IconMenuDeep } from '@tabler/icons-vue'
import Button from '../ui/button/Button.vue'
import Drawer from '../ui/drawer/Drawer.vue'
import DrawerTrigger from '../ui/drawer/DrawerTrigger.vue'
import DrawerContent from '../ui/drawer/DrawerContent.vue'
import DrawerHeader from '../ui/drawer/DrawerHeader.vue'
import DrawerTitle from '../ui/drawer/DrawerTitle.vue'
import DrawerFooter from '../ui/drawer/DrawerFooter.vue'
import DrawerClose from '../ui/drawer/DrawerClose.vue'
import GoooLink from '../gooo/GoooLink.vue'
import { computed, ref } from 'vue'

type NavigationLinks = {
  text: string
  href: string
}

const navigationLinks = computed<NavigationLinks[]>(() => {
  return [
    { text: 'Get Started', href: '/get-started' },
    { text: 'Guide', href: '/guide' },
    { text: 'Docs', href: '/install' },
  ]
})

const drawerOpen = ref<boolean>(false)
</script>

<template>
  <Drawer v-model:open="drawerOpen">
    <DrawerTrigger as-child>
      <Button variant="ghost">
        <span class="sr-only">Drawer Button</span>
        <IconMenuDeep class="size-5 text-foreground" />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <div class="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
        </DrawerHeader>
        <div class="px-4 pb-0 w-full flex items-center justify-center">
          <div class="flex items-center flex-col justify-center gap-y-2 max-w-xs w-full">
            <Button
              v-for="link in navigationLinks"
              :key="link.href"
              as-child
              variant="outlineGhost"
              class="w-full"
            >
              <GoooLink prefetch-on="visibility" :href="link.href"> {{ link.text }} </GoooLink>
            </Button>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose as-child>
            <Button variant="outline"> Close </Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
</template>

<style scoped></style>
