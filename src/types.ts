import type { NuxtLinkProps } from '#app'

export interface AboutItemButton {
  text: string
  href: string
}

export interface AboutItemListItem {
  id: number | string
  text: string
}

export interface AboutItem {
  id: string | number
  title: string
  image: string
  text?: string[]
  button?: AboutItemButton
  list?: AboutItemListItem[]
}

export interface FeaturesItem {
  id: string | number
  icon: string
  title: string
  text: string
}

export interface InnerHeroItem {
  id: string | number
  icon: string
  title: string
  text: string
}

export interface InnerHeroButton {
  text: string
  href: string
}

export type PricingPlanColor = 'primary' | 'secondary' | 'tertiary'

export interface PricingPlanItem {
  id: string | number
  text: string
}

export interface PricingPlan {
  id: string | number
  name: string
  price: number
  label: string
  button?: {
    href: string
    text: string
    color: PricingPlanColor
    external: boolean
  }
  list: PricingPlanItem[]
}

export interface PricingVariant {
  id: string | number
  title: string
  description: string
  icon: string
  plans: PricingPlan[]
}

export interface BenefitsItem {
  id: string | number
  icon: string
  title: string
  text: string
}

export interface FaqItem {
  id: string | number
  title: string
  text: string
}

export interface UiListItem {
  id: string
  text: string
}

export interface UiButtonLink {
  to?: NuxtLinkProps['to']
  ui?: 'primary' | 'secondary' | 'outline'
  size?: 'md' | 'lg'
  arrow?: boolean
  external?: boolean
  text: string
}

export interface SharedHomeHero {
  title: string
  image: string
  list: UiListItem[]
  buttons: Array<UiButtonLink & { id: string }>
}

export interface SharedServicesItem {
  id: string
  icon: string
  title: string
  text: string
  href: string
}

export interface SharedServices {
  label: string
  title: string
  description: string
  list: UiListItem[]
  items: SharedServicesItem[]
}

export interface SharedBlogItem {
  id: string
  title: string
  image: string
}

export interface SharedBlog {
  label: string
  title: string
  description: string
  items: SharedBlogItem[]
}

export interface SharedStepsItem {
  id: string
  image: string
  title: string
  text: string
}

export interface SharedSteps {
  title: string
  description: string
  items: SharedStepsItem[]
}

export interface SharedInnerHeroItem {
  id: string
  icon: string
  title: string
  description: string
}

export interface SharedInnerHero {
  primaryImage: string
  secondaryImage: string
  title: string
  description?: string
  button?: UiButtonLink
  items: SharedInnerHeroItem[]
}

export interface SharedContentItem {
  id: string
  title: string
  image: string
  text: string
  button?: UiButtonLink
  list?: UiListItem[]
}

export interface SharedContent {
  label: string
  title: string
  items: SharedContentItem[]
}

export interface TipsItem {
  id: string | number
  icon: string
  title: string
  text: string
}
