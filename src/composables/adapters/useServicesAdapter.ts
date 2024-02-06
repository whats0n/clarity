import type { Maybe, ServicesSection } from '~/graphql/types'
import type { SharedServices, SharedServicesItem } from '~/types'

export const useServicesAdapter = () => {
  const listAdapter = useListAdapter()

  return (source?: Maybe<ServicesSection>): SharedServices | null =>
    source
      ? {
          label: source.label || '',
          title: source.title || '',
          description: source.description || '',
          list: listAdapter(source.list),
          items: (source.items || []).reduce<SharedServicesItem[]>(
            (result, item) => {
              if (item)
                result.push({
                  id: item.id,
                  icon: item.icon.name,
                  title: item.title,
                  text: item.description,
                  href: item.href,
                })

              return result
            },
            [],
          ),
        }
      : null
}
