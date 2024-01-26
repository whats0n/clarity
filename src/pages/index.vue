<template>
  <div :class="$style.page">
    <SharedSteps />
    <SharedExplore />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Home',
})
</script>

<style lang="scss" module>
.page {
  position: relative;
  padding-top: 100px;
}
</style>
