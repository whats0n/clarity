import type { ComponentUiButton, HomeHeroSection, Maybe } from '~/graphql/types'
import type { SharedHomeHero } from '~/types'

export const useHomeHeroAdapter = () => {
  const imageSrc = useImageSrc()
  const buttonAdapter = useButtonAdapter()
  const listAdapter = useListAdapter()

  return (source?: Maybe<HomeHeroSection>): SharedHomeHero => {
    return {
      title: source?.title || '',
      image: imageSrc(source?.image),
      list: listAdapter(source?.list),
      buttons: (source?.buttons || [])
        .filter((button): button is ComponentUiButton => !!button)
        .map((button) => ({
          id: button.id,
          ...buttonAdapter(button),
        })),
    }
  }
}
