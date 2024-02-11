<template>
  <div :class="$style.page">
    <SharedPricingHero
      v-if="hero"
      :title="hero.title"
      :description="hero.description"
      :variants="hero.variants"
      :class="$style.hero"
    />
    <SharedPricingFeatures
      v-if="pricingFeatures"
      :label="pricingFeatures.label"
      :title="pricingFeatures.title"
      :items="pricingFeatures.items"
      :class="$style.benefits"
    />
    <SharedFaq
      v-if="faq"
      :title="faq.title"
      :items="faq.items"
      :class="$style.faq"
    />
  </div>
</template>

<script lang="ts" setup>
import GET_REVERSE_OSMOSIS_PRICE_PAGE from '~/graphql/queries/GetReverseOsmosisPricePage.gql'
import type { Query } from '~/graphql/types'
import type {
  SharedFaq,
  SharedPricingFeatures,
  SharedPricingHero,
} from '~/types'

const { data, error } = await useAsyncQuery<Pick<Query, 'reverseOsmosisPrice'>>(
  GET_REVERSE_OSMOSIS_PRICE_PAGE,
)

if (!data.value || error.value) showError({ statusCode: 404 })

useSeo(data.value.reverseOsmosisPrice?.data?.attributes?.seo)

const heroAdapter = usePricingHeroAdapter()
const hero = computed<SharedPricingHero | null>(() =>
  heroAdapter(
    data.value.reverseOsmosisPrice?.data?.attributes?.pricing_page_template
      ?.data?.attributes?.pricing_hero_section?.data?.attributes,
  ),
)

const pricingFeaturesAdapter = usePricingFeaturesAdapter()
const pricingFeatures = computed<SharedPricingFeatures | null>(() =>
  pricingFeaturesAdapter(
    data.value.reverseOsmosisPrice?.data?.attributes?.pricing_page_template
      ?.data?.attributes?.pricing_features_section?.data?.attributes,
  ),
)

const faqAdapter = useFaqAdapter()
const faq = computed<SharedFaq | null>(() =>
  faqAdapter(
    data.value.reverseOsmosisPrice?.data?.attributes?.pricing_page_template
      ?.data?.attributes?.faq_section?.data?.attributes,
  ),
)
</script>

<style lang="scss" module>
.page {
  position: relative;
}

.hero {
  margin-bottom: 110px;
}

.benefits {
  margin-bottom: 147px;
}

.faq {
  margin-bottom: 144px;
}
</style>
