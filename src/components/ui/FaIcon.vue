<template>
  <ClientOnly>
    <font-awesome-icon :icon="icon" v-bind="$attrs" />
  </ClientOnly>
</template>

<script lang="ts" setup>
defineProps<{
  icon: string[]
}>()

defineOptions({
  inheritAttrs: false,
})
</script>
