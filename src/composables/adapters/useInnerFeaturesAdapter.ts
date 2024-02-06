import type { InnerFeaturesSection, Maybe } from '~/graphql/types'
import type { SharedInnerFeatures, SharedInnerFeaturesItem } from '~/types'

export const useInnerFeaturesAdapter = () => {
  return (source?: Maybe<InnerFeaturesSection>): SharedInnerFeatures | null => {
    return source
      ? {
          title: source.title || '',
          label: source.label || '',
          items: (source.items || []).reduce<SharedInnerFeaturesItem[]>(
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
