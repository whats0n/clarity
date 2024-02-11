import type { ComponentSharedSeo, Maybe } from '~/graphql/types'

export const useSeoAdapter = (source?: Maybe<ComponentSharedSeo>) => {
  const imageSrc = useImageSrc()

  return computed<{
    title: string
    description: string
    image: string
  }>(() => ({
    title: source?.metaTitle || '',
    description: source?.metaDescription || '',
    image: imageSrc(source?.shareImage),
  }))
}
