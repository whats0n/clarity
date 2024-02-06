<template>
  <div :class="$style.page">
    <SharedInnerHero
      ui="yellow"
      title="Stop a water leak before it destroys your house"
      primary-image="/images/inner-hero-05.png"
      secondary-image="/images/inner-hero-06.png"
      :items="heroItems"
      :button="{
        href: '/',
        text: 'Protect my home',
      }"
      :class="$style.hero"
    />
    <SharedContent
      label="ABOUT LD"
      title="What is Leak Detection?"
      :items="aboutItems"
      :class="$style.about"
    />
    <SharedTips title="Protect your most important investment" :items="tips" />
    <div :class="$style.button">
      <UiButton to="/" text="Protect my home" />
    </div>
    <SharedBlog :class="$style.explore" />
  </div>
</template>

<script lang="ts" setup>
import type { AboutItem, InnerHeroItem, TipsItem } from '~/types'

definePageMeta({
  title: 'Leak detection',
})

const heroItems: InnerHeroItem[] = [
  {
    id: 1,
    icon: 'shield-protected',
    title: 'Peace of Mind',
    text: 'Protection at all times',
  },
  {
    id: 2,
    icon: 'battery-charging',
    title: 'Backup Power',
    text: 'Battery backup enabled',
  },
  {
    id: 3,
    icon: 'wifi',
    title: 'Works Offline',
    text: 'No wifi required',
  },
  {
    id: 4,
    icon: 'hammer',
    title: 'Builder Programs',
    text: 'Install for new homes',
  },
]

const aboutItems: AboutItem[] = [
  {
    id: 1,
    title: 'How Flologic works for you',
    image: '/images/about-04.png',
    text: [
      'Installing a FloLogic leak detector in your home offers comprehensive protection against water damage by swiftly identifying and stopping leaks of virtually all sizes throughout your plumbing system.',
      'This advanced technology not only safeguards your property but also saves you from the costly repairs and stress associated with water damage. Additionally, FloLogic provides attractive dealer pricing, making it an appealing option for contractors and homeowners alike.',
    ],
    button: {
      href: '/',
      text: 'Protect my home',
    },
  },
]

const tips: TipsItem[] = [
  {
    id: 1,
    icon: 'tips-detects',
    title: 'Detects',
    text: 'After detecting a leak or critically low room temperature, the system closes the water supply to minimize and prevent any damage or waste. FloLogic keeps your home safe, wherever you may be.',
  },
  {
    id: 2,
    icon: 'tips-alerts',
    title: 'Alerts',
    text: 'The FloLogic mobile app sends instant alerts, providing vital information about abnormal water activity, critically low temperatures, or auto-shutoffs. You can easily forward information to a plumber, caretaker or your emergency contacts.',
  },
  {
    id: 3,
    icon: 'tips-controls',
    title: 'Controls',
    text: 'With the tap of a smartphone, you can turn your water off and on, change the System mode, adjust the settings, see if water is flowing, identify the flow duration and more—whether you’re home or thousands of miles away.',
  },
  {
    id: 4,
    icon: 'tips-smart',
    title: 'Smart',
    text: 'FloLogic won’t interrupt normal water use—the System operates out of sight and mind until there’s a leak or critically low temperature. The Connect Module uses a secure cloud connection for IOS and Android app-based alerts and control.',
  },
]
</script>

<style lang="scss" module>
.button {
  padding: 58px 0 114px;
  text-align: center;
}

.explore {
  margin-bottom: 120px;
}
</style>
