<template>
  <div>
    <strong :class="[$style.heading, $style[`heading_${level}`]]">
      <slot />
    </strong>
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'PrivacyPolicyHeading' })

defineProps<{ level: '1' | '2' }>()
</script>

<style lang="scss" module>
.heading {
  color: #000000;
}

.heading_1,
.heading_1 * {
  font-size: 19px;
}

.heading_2,
.heading_2 * {
  font-size: 17px;
}
</style>
