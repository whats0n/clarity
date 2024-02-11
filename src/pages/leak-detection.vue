<template>
  <div :class="$style.page">
    <SharedInnerHero
      v-if="hero"
      ui="yellow"
      :title="hero.title"
      :primary-image="hero.primaryImage"
      :secondary-image="hero.secondaryImage"
      :items="hero.items"
      :button="hero.button"
      :description="hero.description"
      :class="$style.hero"
    />
    <SharedContent
      v-if="content"
      :label="content.label"
      :title="content.title"
      :items="content.items"
      :class="$style.about"
    />
    <SharedTips
      v-if="tips"
      :title="tips.title"
      :items="tips.items"
      :button="tips.button"
      :class="$style.tips"
    />
    <SharedBlog
      v-if="blog"
      :label="blog.label"
      :title="blog.title"
      :description="blog.description"
      :items="blog.items"
      :class="$style.explore"
    />
  </div>
</template>

<script lang="ts" setup>
import type {
  SharedBlog,
  SharedContent,
  SharedInnerHero,
  SharedTips,
} from '~/types'
import GET_LEAK_DETECTION_PAGE from '~/graphql/queries/GetLeakDetectionPage.gql'
import type { Query } from '~/graphql/types'

definePageMeta({
  title: 'Leak detection',
})

const { data, error } = await useAsyncQuery<Pick<Query, 'leakDetection'>>(
  GET_LEAK_DETECTION_PAGE,
)

if (!data.value || error.value) showError({ statusCode: 404 })

useSeo(data.value.leakDetection?.data?.attributes?.seo)

const heroAdapter = useInnerHeroAdapter()
const hero = computed<SharedInnerHero | null>(() => {
  return heroAdapter(
    data.value?.leakDetection?.data?.attributes?.inner_hero_section?.data
      ?.attributes,
  )
})

const contentAdapter = useContentAdapter()
const content = computed<SharedContent | null>(() => {
  return contentAdapter(
    data.value?.leakDetection?.data?.attributes?.content_section?.data
      ?.attributes,
  )
})

const blogAdapter = useBlogAdapter()
const blog = computed<SharedBlog | null>(() => {
  return blogAdapter(
    data.value.leakDetection?.data?.attributes?.blog_section?.data?.attributes,
  )
})

const tipsAdapter = useTipsAdapter()
const tips = computed<SharedTips | null>(() => {
  return tipsAdapter(
    data.value.leakDetection?.data?.attributes?.tips_section?.data?.attributes,
  )
})
</script>

<style lang="scss" module>
.tips {
  margin-bottom: 56px;
}

.explore {
  margin-bottom: 120px;
}
</style>
