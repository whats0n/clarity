<template>
  <div>
    <SharedLayoutHeader />
    <div>
      <slot />
    </div>
    <SharedLayoutFooter />
  </div>
</template>

<script lang="ts" setup>
defineOptions({ name: 'ContactsLayout' })
</script>
