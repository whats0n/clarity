type ToastUI = 'success' | 'danger' | 'warning' | 'info'

interface ToastMessage {
  id: string
  ui: ToastUI
  message: string
  timerId: number | null
}

interface Toast {
  messages: ToastMessage[]
  success(message: string): void
  danger(message: string): void
  warning(message: string): void
  info(message: string): void
}

const messages = reactive<ToastMessage[]>([])

export const useToast = (): Toast => {
  const uid = (size: number = 16): string => {
    let str = ''

    while (str.length < size) {
      str += Math.random().toString(36).slice(2)
    }

    return str.slice(0, size)
  }

  const show = (ui: ToastUI, message: string): (() => void) => {
    const data: ToastMessage = {
      id: uid(),
      ui,
      message,
      timerId: window.setTimeout(() => {
        close()
      }, 3000),
    }

    const close = (): void => {
      const index = messages.findIndex((item) => item.id === data.id)
      if (index >= 0) messages.splice(index, 1)
    }

    messages.push(data)

    return close
  }

  return {
    messages,
    success: (message) => show('success', message),
    danger: (message) => show('danger', message),
    warning: (message) => show('warning', message),
    info: (message) => show('info', message),
  }
}
