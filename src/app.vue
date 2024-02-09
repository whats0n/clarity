<template>
  <div>
    <NuxtLayout>
      <NuxtPage :class="$style.page" />
    </NuxtLayout>
    <SharedLayoutToast />
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
.page {
  > *:first-child {
    padding-top: 140px;
  }
}
</style>
