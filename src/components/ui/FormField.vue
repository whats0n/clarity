<template>
  <div :class="$style.field">
    <div :class="$style.label">
      {{ label }}
    </div>
    <div :class="$style.control">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  label: string
}>()
</script>

<style lang="scss" module>
.label {
  margin-bottom: 12px;
  color: var(--primary-light-color);
  font-weight: 600;
  font-size: 16px;
  font-family: var(--font-secondary);
  line-height: 22px;
}
</style>
