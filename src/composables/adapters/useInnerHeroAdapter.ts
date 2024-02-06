import type { InnerHeroSection, Maybe } from '~/graphql/types'
import type { SharedInnerHero, SharedInnerHeroItem } from '~/types'

export const useInnerHeroAdapter = () => {
  const imageSrc = useImageSrc()
  const buttonAdapter = useButtonAdapter()

  return (source?: Maybe<InnerHeroSection>): SharedInnerHero | null => {
    return source
      ? {
          title: source.title || '',
          description: source.description || '',
          primaryImage: imageSrc(source.primary_image),
          secondaryImage: imageSrc(source.secondary_image),
          button: source.button ? buttonAdapter(source.button) : undefined,
          items: (source.items || []).reduce<SharedInnerHeroItem[]>(
            (result, item) => {
              if (item)
                result.push({
                  id: item.id,
                  title: item.title,
                  description: item.description,
                  icon: item.icon.name,
                })

              return result
            },
            [],
          ),
        }
      : null
  }
}
