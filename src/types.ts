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
