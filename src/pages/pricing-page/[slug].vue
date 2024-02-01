<template>
  <div :class="$style.page">
    <h2>Data:</h2>
    <pre>{{ data }}</pre>
    <h2>Error:</h2>
    <pre>{{ error }}</pre>
    <h2>Status:</h2>
    <pre>{{ status }}</pre>
  </div>
</template>

<script lang="ts" setup>
import GET_PRICING_PAGES from '~/graphql/queries/GetPricingPages.graphql'
import type { Query } from '~/graphql/types'

const { data, error, status } =
  await useAsyncQuery<Pick<Query, 'pricingPages'>>(GET_PRICING_PAGES)

console.log(data.value.pricingPages)
</script>

<style lang="scss" module>
.page {
  position: relative;
}
</style>
