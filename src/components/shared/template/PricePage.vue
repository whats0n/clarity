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
import type {
  ComponentSharedSeo,
  FaqSection,
  Maybe,
  PricingFeaturesSection,
  PricingHeroSection,
} from '~/graphql/types'
import type {
  SharedFaq,
  SharedPricingFeatures,
  SharedPricingHero,
} from '~/types'

const props = defineProps<{
  heroSection?: Maybe<PricingHeroSection>
  featuresSection?: Maybe<PricingFeaturesSection>
  faqSection?: Maybe<FaqSection>
  seo?: Maybe<ComponentSharedSeo>
}>()

useSeo(props.seo)

const heroAdapter = usePricingHeroAdapter()
const hero = computed<SharedPricingHero | null>(() =>
  heroAdapter(props.heroSection),
)

const pricingFeaturesAdapter = usePricingFeaturesAdapter()
const pricingFeatures = computed<SharedPricingFeatures | null>(() =>
  pricingFeaturesAdapter(props.featuresSection),
)

const faqAdapter = useFaqAdapter()
const faq = computed<SharedFaq | null>(() => faqAdapter(props.faqSection))
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
