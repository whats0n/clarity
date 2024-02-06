import type { FeaturesSection, Maybe } from '~/graphql/types'
import type { SharedAbout, SharedAboutItem } from '~/types'

export const useAboutAdapter = () => {
  const imageSrc = useImageSrc()
  const buttonAdapter = useButtonAdapter()
  const listAdapter = useListAdapter()
  const paragraphAdapter = useParagraphAdapter()

  return (source?: Maybe<FeaturesSection>): SharedAbout => {
    return {
      label: source?.label || '',
      title: source?.title || '',
      items: (source?.items || []).reduce<SharedAboutItem[]>((result, item) => {
        if (item)
          result.push({
            id: item.id,
            title: item.title,
            image: imageSrc(item.image),
            list: listAdapter(item.list),
            text: paragraphAdapter(item.paragraph),
            button: item?.button ? buttonAdapter(item.button) : undefined,
          })

        return result
      }, []),
    }
  }
}
