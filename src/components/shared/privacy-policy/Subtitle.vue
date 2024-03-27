<template>
  <div :class="$style.subtitle">
    <strong>
      <slot />
    </strong>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'PrivacyPolicySubtitle' })
</script>

<style lang="scss" module>
.subtitle {
  color: #595959;
  font-size: 14px;
  line-height: 1.5;
}
</style>
