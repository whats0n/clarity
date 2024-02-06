import type { Maybe, PricingFeaturesSection } from '~/graphql/types'
import type { SharedPricingFeatures, SharedPricingFeaturesItem } from '~/types'

export const usePricingFeaturesAdapter = () => {
  return (
    source?: Maybe<PricingFeaturesSection>,
  ): SharedPricingFeatures | null => {
    return source
      ? {
          label: source.label || '',
          title: source.title || '',
          items: (source.items || []).reduce<SharedPricingFeaturesItem[]>(
            (result, item) => {
              if (item)
                result.push({
                  id: item.id,
                  icon: item.icon.name,
                  title: item.title,
                  description: item.description,
                })
              return result
            },
            [],
          ),
        }
      : null
  }
}
