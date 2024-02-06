import type { Maybe, UploadFileEntityResponse } from '~/graphql/types'

export const useImageSrc = () => {
  const runtimeConfig = useRuntimeConfig()

  return (src?: Maybe<UploadFileEntityResponse>) => {
    const url = src?.data?.attributes?.url || ''
    return url.startsWith('/')
      ? [runtimeConfig.public.strapiUrl, url].join('')
      : url
  }
}
