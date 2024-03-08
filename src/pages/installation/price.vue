<template>
  <SharedTemplatePricePage
    :hero-section="
      data?.installationPrice?.data?.attributes?.pricing_page_template?.data
        ?.attributes?.pricing_hero_section?.data?.attributes
    "
    :features-section="
      data?.installationPrice?.data?.attributes?.pricing_page_template?.data
        ?.attributes?.pricing_features_section?.data?.attributes
    "
    :faq-section="
      data?.installationPrice?.data?.attributes?.pricing_page_template?.data
        ?.attributes?.faq_section?.data?.attributes
    "
  />
</template>

<script lang="ts" setup>
import GET_INSTALLATION_PRICE_PAGE from '~/graphql/queries/GetInstallationPricePage.gql'
import type { Query } from '~/graphql/types'

const { data, error } = await useAsyncQuery<Pick<Query, 'installationPrice'>>(
  GET_INSTALLATION_PRICE_PAGE,
)

if (!data.value || error.value) showError({ statusCode: 404 })
</script>
