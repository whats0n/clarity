import type { ComponentSharedSeo, Maybe } from '~/graphql/types'

export const useSeo = (source?: Maybe<ComponentSharedSeo>) => {
  const seo = useSeoAdapter(source)

  useHead({
    title: seo.value.title,
    meta: [
      {
        name: 'description',
        content: seo.value.description,
      },
      {
        name: 'og:title',
        content: seo.value.title,
      },
      {
        name: 'og:description',
        content: seo.value.description,
      },
      {
        name: 'og:image',
        content: seo.value.image,
      },
    ],
  })
}
