import { v4 } from 'uuid'

export const useOrderToken = () => {
  const cookie = useCookie('orderToken')

  const generate = (): string => v4()

  const set = (token: string): void => {
    cookie.value = token
  }

  const get = (): string => {
    return cookie.value || ''
  }

  return {
    generate,
    set,
    get,
  }
}
