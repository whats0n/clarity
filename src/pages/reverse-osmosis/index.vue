<template>
  <div :class="$style.page">
    <div :class="$style.light">
      <SharedInnerHero
        :title="hero.title"
        :description="hero.description"
        :primary-image="hero.primaryImage"
        :secondary-image="hero.secondaryImage"
        :items="hero.items"
        :button="hero.button"
        :class="$style.hero"
      />
      <SharedContent
        :label="about.label"
        :title="about.title"
        :items="about.items"
      />
    </div>
    <SharedFeatures
      label="Clarity Difference"
      title="Let us be your water people"
      :items="featuresItems"
      :class="$style.features"
    />
    <SharedBlog
      :label="explore.label"
      :title="explore.title"
      :description="explore.description"
      :items="explore.items"
      :class="$style.explore"
    />
  </div>
</template>

<script lang="ts" setup>
import type {
  SharedInnerHero,
  FeaturesItem,
  SharedBlog,
  SharedContent,
} from '~/types'
import GET_REVERSE_OSMOSIS_PAGE from '~/graphql/queries/getReverseOsmosisPage.gql'
import type { ReverseOsmosisPageEntityResponse } from '~/graphql/types'

definePageMeta({
  title: 'Reverse-Osmosis',
})

const { data, error } = await useAsyncQuery<{
  reverseOsmosisPage: ReverseOsmosisPageEntityResponse
}>(GET_REVERSE_OSMOSIS_PAGE)

if (!data.value || error.value) showError({ statusCode: 404 })

const heroAdapter = useInnerHeroAdapter()
const hero = computed<SharedInnerHero>(() => {
  return heroAdapter(
    data.value?.reverseOsmosisPage?.data?.attributes?.inner_page?.data
      ?.attributes?.hero,
  )
})

const aboutAdapter = useAboutAdapter()
const about = computed<SharedContent>(() => {
  return aboutAdapter(
    data.value?.reverseOsmosisPage?.data?.attributes?.inner_page?.data
      ?.attributes?.content_section?.data?.attributes,
  )
})

const exploreAdapter = useBlogAdapter()
const explore = computed<SharedBlog>(() => {
  return exploreAdapter(
    data.value.reverseOsmosisPage.data?.attributes?.explore_section?.data
      ?.attributes,
  )
})

const featuresItems: FeaturesItem[] = [
  {
    id: 1,
    icon: 'donation',
    title: 'Discounted Filters',
    text: 'Clarity customers get manufacturer specific water filters delivered and installed.',
  },
  {
    id: 2,
    icon: 'protection',
    title: 'Professional Installation',
    text: 'We handle every aspect of the process so you can sit back and relax. Let us work hard for your water.',
  },
  {
    id: 3,
    icon: 'marker',
    title: 'Designed for Atlanta',
    text: 'We tailor the water filtration system that will give you the best reduction in impurities found in YOUR water.',
  },
  {
    id: 4,
    icon: 'heart',
    title: 'Health Forward',
    text: 'Removing PFAS, Toxins, and metal contamination will give your body the reset it needs.',
  },
  {
    id: 5,
    icon: 'drop',
    title: 'Less Wasted Water',
    text: 'Our High efficiancy RO options will reduce RO waster by up to 3x times saving you money in the long run.',
  },
]
</script>

<style lang="scss" module>
.light {
  background: #fff;
}

.hero {
  @include media($to: md) {
    margin-bottom: 60px;
  }
}

.features {
  margin-bottom: 80px;
}

.explore {
  margin-bottom: 119px;
}
</style>
