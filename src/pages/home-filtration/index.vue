<template>
  <div :class="$style.page">
    <SharedInnerHero
      v-if="hero"
      :title="hero.title"
      :description="hero.description"
      :primary-image="hero.primaryImage"
      :secondary-image="hero.secondaryImage"
      :items="hero.items"
      :button="hero.button"
      :class="$style.hero"
    />
    <div :class="$style.light">
      <SharedContent
        v-if="content"
        :label="content.label"
        :title="content.title"
        :items="content.items"
      />
    </div>
    <SharedInnerFeatures
      v-if="innerFeatures"
      :label="innerFeatures.label"
      :title="innerFeatures.title"
      :items="innerFeatures.items"
      :class="$style.features"
    />
    <SharedBlog
      v-if="blog"
      :label="blog.label"
      :title="blog.title"
      :description="blog.description"
      :items="blog.items"
      :class="$style.blog"
    />
  </div>
</template>

<script lang="ts" setup>
import type {
  SharedInnerHero,
  SharedBlog,
  SharedContent,
  SharedInnerFeatures,
} from '~/types'
import GET_HOME_FILTRATION_PAGE from '~/graphql/queries/GetHomeFiltrationPage.gql'
import type { Query } from '~/graphql/types'

const { data, error } = await useAsyncQuery<Pick<Query, 'whFiltration'>>(
  GET_HOME_FILTRATION_PAGE,
)

if (!data.value || error.value) showError({ statusCode: 404 })

useSeo(data.value.whFiltration?.data?.attributes?.seo)

const heroAdapter = useInnerHeroAdapter()
const hero = computed<SharedInnerHero | null>(() => {
  return heroAdapter(
    data.value?.whFiltration?.data?.attributes?.inner_hero_section?.data
      ?.attributes,
  )
})

const contentAdapter = useContentAdapter()
const content = computed<SharedContent | null>(() => {
  return contentAdapter(
    data.value?.whFiltration?.data?.attributes?.content_section?.data
      ?.attributes,
  )
})

const blogAdapter = useBlogAdapter()
const blog = computed<SharedBlog | null>(() => {
  return blogAdapter(
    data.value.whFiltration?.data?.attributes?.blog_section?.data?.attributes,
  )
})

const innerFeaturesAdapter = useInnerFeaturesAdapter()
const innerFeatures = computed<SharedInnerFeatures | null>(() => {
  return innerFeaturesAdapter(
    data.value.whFiltration?.data?.attributes?.inner_features_section?.data
      ?.attributes,
  )
})
</script>

<style lang="scss" module>
.light {
  background: #fff;

  @include media($from: md) {
    margin-top: -170px;
    padding-top: 170px;
  }
}

.hero {
  @include media($to: md) {
    margin-bottom: 60px;
  }
}

.features {
  margin-bottom: 80px;
}

.blog {
  margin-bottom: 119px;
}
</style>
