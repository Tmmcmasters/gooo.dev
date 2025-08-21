<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import type { GhostLinkProps } from '.'
import GoooLink from '@/components/gooo/GoooLink.vue'

const props = defineProps<GhostLinkProps>()
</script>

<template>
  <Button as-child variant="outline">
    <GoooLink :href="props.href"> {{ props.text }} </GoooLink>
  </Button>
</template>

<style scoped></style>
