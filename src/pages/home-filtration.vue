<template>
  <div :class="$style.page">
    <div :class="$style.light">
      <SharedInnerHero
        title="Whole-Home Filtered Water"
        text="Ensuring every drop throughout your home is clean, clear, and safe for your family."
        primary-image="/images/inner-hero-03.png"
        secondary-image="/images/inner-hero-04.png"
        :items="heroItems"
        :button="{
          href: '/',
          text: 'Shop RO Packages',
        }"
        :class="$style.hero"
      />
      <SharedAbout
        label="About whole home filtration"
        title="Why should I filter my homes water?"
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
  title: 'Whole-Home Filtration',
})

const aboutItems: AboutItem[] = [
  {
    id: 1,
    title: 'The First Line of Defense',
    image: '/images/about-03.png',
    text: [
      `A whole home water filtration system ensures clean and healthy water from every faucet. By removing sediments, chlorine, heavy metals, and harmful chemicals, it enhances taste and safeguards your family's well-being.`,
      'Say goodbye to concerns about contaminants and enjoy the convenience of purified water throughout your entire home, promoting a healthier and more refreshing lifestyle',
    ],
    button: {
      href: '/',
      text: 'Shop Whole Home Packages',
    },
  },
  {
    id: 1,
    title: 'What does Whole Home Filtration reduce?',
    image: '/images/about-02.png',
    text: [
      'The majority of households are supplied with municipal water, while some use well water. A whole home water filter is designed to reduce a variety of contaminants, providing comprehensive filtration. The reduction typically includes:',
    ],
    list: [
      { id: 1, text: 'Sediments' },
      { id: 2, text: 'Chlorine' },
      { id: 3, text: 'Heavy Metals' },
      { id: 4, text: 'Chemicals' },
      { id: 5, text: 'Microorganisms' },
      { id: 6, text: 'Scale & Mineral Deposits' },
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
    text: 'Removing sediment, heavy metals and chlorine will give your body the reset it needs.',
  },
  {
    id: 5,
    icon: 'drop',
    title: 'No Water Reduction',
    text: 'Our systems are highly efficient, meaning you will not experience a loss in water pressure or access.',
  },
]

const heroItems: InnerHeroItem[] = [
  {
    id: 1,
    icon: 'rain',
    title: 'Remove Contaminants',
    text: 'Get rid of all the bad stuff',
  },
  {
    id: 2,
    icon: 'drop',
    title: 'Smooth Water',
    text: 'Feel the difference',
  },
  {
    id: 3,
    icon: 'water_mixer',
    title: 'Synergy with RO',
    text: 'Prolong RO Filters',
  },
  {
    id: 4,
    icon: 'gas_stove',
    title: 'Clean Cooking Water',
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
