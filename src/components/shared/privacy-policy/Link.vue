<template>
  <a :class="$style.link">
    <slot />
  </a>
</template>

<script lang="ts" setup>
defineOptions({ name: 'PrivacyPolicyLink' })
</script>

<style lang="scss" module>
.link {
  color: #3030f1;
  word-break: break-word;

  @include hover {
    text-decoration: underline;
  }
}
</style>
