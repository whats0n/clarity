import type { ComponentSharedParagraph, Maybe } from '~/graphql/types'

export const useParagraphAdapter = () => {
  return (
    source?: Maybe<ComponentSharedParagraph>[],
  ): Record<'id' | 'text', string>[] =>
    (source || []).reduce<Record<'id' | 'text', string>[]>(
      (paragraphs, paragraph) => {
        if (paragraph)
          paragraphs.push({ id: paragraph.id, text: paragraph.text })

        return paragraphs
      },
      [],
    )
}
