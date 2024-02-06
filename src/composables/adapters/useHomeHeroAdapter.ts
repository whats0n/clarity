import type { HomeHeroSection, Maybe } from '~/graphql/types'
import type { SharedHomeHero } from '~/types'

export const useHomeHeroAdapter = () => {
  const imageSrc = useImageSrc()
  const buttonAdapter = useButtonAdapter()
  const listAdapter = useListAdapter()

  return (source?: Maybe<HomeHeroSection>): SharedHomeHero | null => {
    return source
      ? {
          title: source.title || '',
          image: imageSrc(source.image),
          list: listAdapter(source.list),
          buttons: (source.buttons || []).reduce<SharedHomeHero['buttons']>(
            (result, button) => {
              if (button)
                result.push({ id: button.id, ...buttonAdapter(button) })

              return result
            },
            [],
          ),
        }
      : null
  }
}
