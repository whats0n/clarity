import type { ComponentSharedListItem, Maybe } from '~/graphql/types'
import type { UiListItem } from '~/types'

export const useListAdapter = () => {
  return (list?: Maybe<Maybe<ComponentSharedListItem>[]>): UiListItem[] =>
    (list || []).filter(
      (item): item is UiListItem =>
        typeof item === 'object' &&
        item !== null &&
        Object.hasOwn(item, 'id') &&
        Object.hasOwn(item, 'text'),
    )
}
