<template>
  <div>
    <SharedLayoutHeader />
    <div>
      <slot />
    </div>
    <SharedLayoutContacts :class="$style.contacts" />
    <SharedLayoutFooter />
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'DefaultLayout' })
</script>

<style lang="scss" module>
.contacts {
  margin-bottom: -55px;
}
</style>
