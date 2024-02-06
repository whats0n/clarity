import type { BlogSection, Maybe } from '~/graphql/types'
import type { SharedBlog, SharedBlogItem } from '~/types'

export const useBlogAdapter = () => {
  const imageSrc = useImageSrc()

  return (source?: Maybe<BlogSection>): SharedBlog | null => {
    return source
      ? {
          label: source.label || '',
          title: source.title || '',
          description: source.description || '',
          items: (source.items || []).reduce<SharedBlogItem[]>(
            (result, item) => {
              if (item)
                result.push({
                  id: item.id,
                  title: item.title,
                  image: imageSrc(item.image),
                })

              return result
            },
            [],
          ),
        }
      : null
  }
}
