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

export interface PricingPlan {
  id: string | number
  name: string
  price: string
  label: string
  button: {
    href: string
    text: string
    color: PricingPlanColor
  }
  list: {
    id: string | number
    text: string
  }[]
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
