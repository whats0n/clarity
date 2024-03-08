<template>
  <SharedTemplatePricePage
    :hero-section="
      data?.reverseOsmosisPrice?.data?.attributes?.pricing_page_template?.data
        ?.attributes?.pricing_hero_section?.data?.attributes
    "
    :features-section="
      data?.reverseOsmosisPrice?.data?.attributes?.pricing_page_template?.data
        ?.attributes?.pricing_features_section?.data?.attributes
    "
    :faq-section="
      data?.reverseOsmosisPrice?.data?.attributes?.pricing_page_template?.data
        ?.attributes?.faq_section?.data?.attributes
    "
  />
</template>

<script lang="ts" setup>
import GET_REVERSE_OSMOSIS_PRICE_PAGE from '~/graphql/queries/GetReverseOsmosisPricePage.gql'
import type { Query } from '~/graphql/types'

const { data, error } = await useAsyncQuery<Pick<Query, 'reverseOsmosisPrice'>>(
  GET_REVERSE_OSMOSIS_PRICE_PAGE,
)

if (!data.value || error.value) showError({ statusCode: 404 })
</script>
