<template>
  <svg viewBox="0 0 24 24" :class="$style.icon">
    <use :xlink:href="url" />
  </svg>
</template>

<script lang="ts" setup>
defineOptions({ name: 'BaseIcon' })

const props = defineProps<{ name: string }>()

const url = computed(() => `/images/sprite.svg#${props.name}`)
</script>

<style lang="scss" module>
.icon {
  display: inline-block;
  aspect-ratio: 1/1;
  vertical-align: top;
}
</style>
