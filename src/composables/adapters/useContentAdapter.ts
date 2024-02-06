import type { ContentSection, Maybe } from '~/graphql/types'
import type { SharedContent, SharedContentItem } from '~/types'

export const useContentAdapter = () => {
  const imageSrc = useImageSrc()
  const buttonAdapter = useButtonAdapter()
  const listAdapter = useListAdapter()

  return (source?: Maybe<ContentSection>): SharedContent | null => {
    return source
      ? {
          label: source.label || '',
          title: source.title || '',
          items: (source.items || []).reduce<SharedContentItem[]>(
            (result, item) => {
              if (item)
                result.push({
                  id: item.id,
                  title: item.title,
                  image: imageSrc(item.image),
                  list: listAdapter(item.list),
                  text: item.text || '',
                  button: item?.button ? buttonAdapter(item.button) : undefined,
                })

              return result
            },
            [],
          ),
        }
      : null
  }
}
