<template>
  <div :class="$style.title">
    <strong>
      <slot />
    </strong>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'PrivacyPolicyTitle' })
</script>

<style lang="scss" module>
.title {
  color: #000000;
  font-size: 26px;
  line-height: 1.5;
}
</style>
