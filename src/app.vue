<template>
  <div>
    <SharedLayoutHeader />
    <NuxtPage />
    <SharedLayoutContacts :class="$style.contacts" />
    <SharedLayoutFooter />
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate(title) {
    return title ? `Clarity - ${title}` : 'Clarity'
  },
})

const { hook } = useNuxtApp()

hook('app:error', (e) => {
  console.dir(e)
})

hook('vue:error', (e) => {
  console.dir(e)
})
</script>

<style lang="scss" module>
.contacts {
  margin-bottom: -55px;
}
</style>
