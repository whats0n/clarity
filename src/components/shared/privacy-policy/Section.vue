<template>
  <div :class="$style.section">
    <SharedPrivacyPolicyHeading level="1">
      {{ title }}
    </SharedPrivacyPolicyHeading>
    <div :class="$style.content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'PrivacyPolicySection' })

defineProps<{ title: string }>()
</script>

<style lang="scss" module>
.section {
  display: grid;
  gap: 21px;
  line-height: 1.5;

  &:not(:last-child) {
    margin-bottom: 21px;
  }
}

.content {
  display: grid;
  gap: 21px;
}
</style>
