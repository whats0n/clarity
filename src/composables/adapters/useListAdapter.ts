import type { ComponentUiListItem, Maybe } from '~/graphql/types'
import type { UiListItem } from '~/types'

export const useListAdapter = () => {
  return (list?: Maybe<Maybe<ComponentUiListItem>[]>): UiListItem[] =>
    (list || []).filter(
      (item): item is UiListItem =>
        typeof item === 'object' &&
        item !== null &&
        Object.hasOwn(item, 'id') &&
        Object.hasOwn(item, 'text'),
    )
}
