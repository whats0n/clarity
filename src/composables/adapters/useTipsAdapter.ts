import type { TipsSection, Maybe } from '~/graphql/types'
import type { SharedTips, SharedTipsItem } from '~/types'

export const useTipsAdapter = () => {
  const buttonAdapter = useButtonAdapter()

  return (source?: Maybe<TipsSection>): SharedTips | null => {
    return source
      ? {
          title: source.title || '',
          button: source.button ? buttonAdapter(source.button) : undefined,
          items: (source.items || []).reduce<SharedTipsItem[]>(
            (result, item) => {
              if (item)
                result.push({
                  id: item.id,
                  title: item.title,
                  description: item.description || '',
                  icon: item.icon.name || '',
                })

              return result
            },
            [],
          ),
        }
      : null
  }
}
