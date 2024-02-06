import type { Maybe, StepsSection } from '~/graphql/types'
import type { SharedSteps, SharedStepsItem } from '~/types'

export const useStepsAdapter = () => {
  const imageSrc = useImageSrc()

  return (source?: Maybe<StepsSection>): SharedSteps => ({
    title: source?.title || '',
    description: source?.description || '',
    items: (source?.items || []).reduce<SharedStepsItem[]>((result, item) => {
      if (item)
        result.push({
          id: item.id,
          title: item.title,
          text: item.description,
          image: imageSrc(item.image),
        })

      return result
    }, []),
  })
}
