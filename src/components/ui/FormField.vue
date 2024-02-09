<template>
  <div :class="$style.field">
    <div :class="$style.label">
      {{ label }}
    </div>
    <div :class="$style.control">
      <slot :invalid="!!error?.length" />
    </div>
    <div v-if="error?.length" :class="$style.error">
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  label: string
  error?: string
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

.error {
  margin-top: 4px;
  color: var(--danger-color);
  font-size: 14px;
  font-family: var(--font-secondary);
  line-height: 16px;
}
</style>
