import type { ExploreSection, Maybe } from '~/graphql/types'
import type { SharedExplore, SharedExploreItem } from '~/types'

export const useExploreAdapter = () => {
  const imageSrc = useImageSrc()

  return (source?: Maybe<ExploreSection>): SharedExplore => {
    return {
      label: source?.label || '',
      title: source?.title || '',
      description: source?.description || '',
      items: (source?.items || []).reduce<SharedExploreItem[]>(
        (result, item) => {
          if (item)
            result.push({
              id: item.id,
              title: item.text,
              image: imageSrc(item.image),
            })

          return result
        },
        [],
      ),
    }
  }
}
