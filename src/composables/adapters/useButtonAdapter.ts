import type { ComponentUiButton } from '~/graphql/types'
import type { UiButtonLink } from '~/types'

export const useButtonAdapter = () => {
  return (source: ComponentUiButton): UiButtonLink => ({
    to: source.href,
    ui: source.ui,
    size: source.size,
    arrow: !!source.arrow,
    external: !!source.external,
    text: source.text,
  })
}
