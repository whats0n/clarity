import type { FaqSection, Maybe } from '~/graphql/types'
import type { SharedFaq, SharedFaqItem } from '~/types'

export const useFaqAdapter = () => {
  return (source?: Maybe<FaqSection>): SharedFaq | null => {
    return source
      ? {
          title: source.title || '',
          items: (source.items || []).reduce<SharedFaqItem[]>(
            (result, item) => {
              if (item)
                result.push({
                  id: item.id,
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
