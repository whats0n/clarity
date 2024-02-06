<template>
  <div :class="$style.page">
    <SharedHomeHero
      :image="hero.image"
      :title="hero.title"
      :list="hero.list"
      :buttons="hero.buttons"
      :class="$style.hero"
    />
    <SharedServices
      :label="services.label"
      :title="services.title"
      :description="services.description"
      :list="services.list"
      :items="services.items"
      :class="$style.services"
    />
    <!--<SharedExplore
      :label="explore.label"
      :title="explore.title"
      :description="explore.description"
      :items="explore.items"
      :class="$style.explore"
    />
    <div :class="$style.steps">
      <SharedSteps
        :title="steps.title"
        :description="steps.description"
        :items="steps.items"
      />
    </div>-->
  </div>
</template>

<script lang="ts" setup>
import GET_HOME_PAGE from '~/graphql/queries/GetHomePage.gql'
import type { Query } from '~/graphql/types'
import type {
  // SharedExplore,
  SharedHomeHero,
  SharedServices,
  // SharedSteps,
} from '~/types'

definePageMeta({
  title: 'Home',
})

const { data, error } =
  await useAsyncQuery<Pick<Query, 'homePage'>>(GET_HOME_PAGE)

console.log(data.value)

if (!data.value || error.value) showError({ statusCode: 404 })

const homeHeroAdapter = useHomeHeroAdapter()
const hero = computed<SharedHomeHero>(() => {
  return homeHeroAdapter(
    data.value.homePage?.data?.attributes?.home_hero_section?.data?.attributes,
  )
})

const servicesAdapter = useServicesAdapter()
const services = computed<SharedServices>(() => {
  return servicesAdapter(
    data.value.homePage?.data?.attributes?.services_section?.data?.attributes,
  )
})

// const exploreAdapter = useExploreAdapter()
// const explore = computed<SharedExplore>(() => {
//   return exploreAdapter(
//     data.value.homePage.data?.attributes?.explore_section?.data?.attributes,
//   )
// })

// const stepsAdapter = useStepsAdapter()
// const steps = computed<SharedSteps>(() => {
//   return stepsAdapter(
//     data.value.homePage.data?.attributes?.steps_section?.data?.attributes,
//   )
// })
</script>

<style lang="scss" module>
.hero {
  margin-bottom: 150px;
}

.services {
  margin-bottom: 144px;
}

.explore {
  margin-bottom: 55px;
}

.steps {
  padding-block: 105px 40px;
  margin-bottom: 52px;
  background: #fff;
}
</style>
