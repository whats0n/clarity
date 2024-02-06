<template>
  <div :class="$style.page">
    <SharedHomeHero
      v-if="hero"
      :image="hero.image"
      :title="hero.title"
      :list="hero.list"
      :buttons="hero.buttons"
      :class="$style.hero"
    />
    <SharedServices
      v-if="services"
      :label="services.label"
      :title="services.title"
      :description="services.description"
      :list="services.list"
      :items="services.items"
      :class="$style.services"
    />
    <SharedBlog
      v-if="blog"
      :label="blog.label"
      :title="blog.title"
      :description="blog.description"
      :items="blog.items"
      :class="$style.blog"
    />
    <div v-if="steps" :class="$style.steps">
      <SharedSteps
        :title="steps.title"
        :description="steps.description"
        :items="steps.items"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import GET_HOME_PAGE from '~/graphql/queries/GetHomePage.gql'
import type { Query } from '~/graphql/types'
import type {
  SharedBlog,
  SharedHomeHero,
  SharedServices,
  SharedSteps,
} from '~/types'

definePageMeta({
  title: 'Home',
})

const { data, error } =
  await useAsyncQuery<Pick<Query, 'homePage'>>(GET_HOME_PAGE)

if (!data.value || error.value) showError({ statusCode: 404 })

const homeHeroAdapter = useHomeHeroAdapter()
const hero = computed<SharedHomeHero | null>(() => {
  return homeHeroAdapter(
    data.value.homePage?.data?.attributes?.home_hero_section?.data?.attributes,
  )
})

const servicesAdapter = useServicesAdapter()
const services = computed<SharedServices | null>(() => {
  return servicesAdapter(
    data.value.homePage?.data?.attributes?.services_section?.data?.attributes,
  )
})

const blogAdapter = useBlogAdapter()
const blog = computed<SharedBlog | null>(() => {
  return blogAdapter(
    data.value.homePage?.data?.attributes?.blog_section?.data?.attributes,
  )
})

const stepsAdapter = useStepsAdapter()
const steps = computed<SharedSteps | null>(() => {
  return stepsAdapter(
    data.value.homePage?.data?.attributes?.steps_section?.data?.attributes,
  )
})
</script>

<style lang="scss" module>
.hero {
  margin-bottom: 150px;
}

.services {
  margin-bottom: 144px;
}

.blog {
  margin-bottom: 55px;
}

.steps {
  padding-block: 105px 40px;
  margin-bottom: 52px;
  background: #fff;
}
</style>
