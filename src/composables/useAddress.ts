import type { ApiAddressDetails, ApiAddressItem } from '~/types'

export const useAddress = async () => {
  const opened = ref<boolean>(false)
  const submitting = ref<boolean>(false)

  const search = ref<string>('')
  const trimSearch = computed<string>(() => search.value.trim())

  const placeId = ref<string>('')
  const details = ref<ApiAddressDetails | null>(null)

  const verifiedAddress = computed<Record<'main' | 'meta', string>>(() => {
    if (!details.value) return { main: '', meta: '' }

    return {
      main: `${details.value.streetNumber} ${details.value.route}`,
      meta: `${details.value.locality}, ${details.value.region} ${details.value.postalCode}`,
    }
  })

  const toast = useToast()

  const { data, pending, refresh } = await useFetch<ApiAddressItem[]>(
    '/api/address/autocomplete',
    {
      query: { search: trimSearch },
      dedupe: 'cancel',
      default: () => [],
      watch: false,
    },
  )

  const load = async (): Promise<void> => {
    placeId.value = ''

    await refresh()

    open()
  }

  const select = (item: ApiAddressItem): void => {
    search.value = item.text
    placeId.value = item.id
    data.value = []
  }

  let timer: number | null = null

  const open = (): void => {
    if (timer) clearTimeout(timer)
    opened.value = true && !!data.value.length
  }

  const close = (): void => {
    timer = window.setTimeout(() => {
      opened.value = false
    }, 500)
  }

  const submit = async (): Promise<void> => {
    if (submitting.value) return

    try {
      submitting.value = true

      const searchParams = new URLSearchParams({
        placeId: placeId.value,
      }).toString()

      const data = await $fetch<ApiAddressDetails>(
        '/api/address/details?' + searchParams,
      )

      details.value = data
    } catch (error) {
      const isError = (e: unknown): e is Error & { statusMessage: string } =>
        e instanceof Error

      toast.danger(
        isError(error)
          ? error.statusMessage || error.message
          : 'Something went wrong',
      )
    } finally {
      submitting.value = false
    }
  }

  return {
    data: reactive({
      search,
      placeId,
      items: data,
      details,
      verifiedAddress,
    }),

    state: reactive({ opened, pending, submitting }),

    actions: {
      load,
      select,
      open,
      close,
      submit,
    },
  }
}
