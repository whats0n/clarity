<template>
  <div :class="$style.page">
    <div :class="$style.light">
      <SharedInnerHero
        title="Reverse-Osmosis Drinking Water"
        text="We install multiple brands of RO drinking water systems. This allows you to pick the solution you truly need."
        primary-image="/images/inner-hero-01.png"
        secondary-image="/images/inner-hero-02.png"
        :items="heroItems"
        :button="{
          href: '/',
          text: 'Shop RO Packages',
        }"
        :class="$style.hero"
      />
      <SharedAbout
        label="About RO"
        title="What is Reverse-Osmosis?"
        :items="aboutItems"
      />
    </div>
    <SharedFeatures
      label="Clarity Difference"
      title="Let us be your water people"
      :items="featuresItems"
      :class="$style.features"
    />
    <SharedExplore :class="$style.explore" />
  </div>
</template>

<script lang="ts" setup>
import type { AboutItem, FeaturesItem, InnerHeroItem } from '~/types'

definePageMeta({
  title: 'Reverse-Osmosis',
})

const aboutItems: AboutItem[] = [
  {
    id: 1,
    title: 'How Reverse-Osmosis works',
    image: '/images/about-01.png',
    text: [
      'Similar to other filtration methods, reverse osmosis cleanses water. However, this water filtration technology forces water through its semi-permeable membrane at a specific pressure.',
      `As a result, only water molecules can pass through the membrane's numerous microscopic pores, which have a pore size of roughly 0.0001 microns. Other impurities will be blocked out by the membrane.`,
    ],
    button: {
      href: '/',
      text: 'Shop RO Packages',
    },
  },
  {
    id: 1,
    title: 'What does Reverse-Osmosis reduce?',
    image: '/images/about-02.png',
    text: [
      'The majority of households are supplied with municipal water, while some use well water. Many harmful substances can seep into domestic water and drinking water from water sources and pipes. As a result, odor, turbidity, and harmful substances exceed the standard, affecting health.',
    ],
    list: [
      { id: 1, text: 'Bacteria' },
      { id: 2, text: 'Virus' },
      { id: 3, text: 'Chlorine' },
      { id: 4, text: 'Arsenic' },
      { id: 5, text: 'Lead' },
      { id: 6, text: 'Mercury' },
      { id: 7, text: 'Phosphate' },
      { id: 8, text: 'Nickel' },
      { id: 9, text: 'Sulphate' },
      { id: 10, text: 'Barium' },
      { id: 11, text: 'Calcium' },
      { id: 12, text: 'Fluoride' },
    ],
  },
]

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

const heroItems: InnerHeroItem[] = [
  {
    id: 1,
    icon: 'rain',
    title: 'Remove Toxins',
    text: 'Get rid of all the bad stuff',
  },
  {
    id: 2,
    icon: 'wine',
    title: 'Improve Taste',
    text: 'Water that tastes great',
  },
  {
    id: 3,
    icon: 'water-mixer',
    title: 'Healthy Hydration',
    text: 'Pure drinking water',
  },
  {
    id: 4,
    icon: 'key',
    title: 'Turn Key Setup',
    text: 'We do everything',
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
