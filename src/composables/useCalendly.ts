type CalendlyListener = () => void

type CalendlyEvent =
  | 'calendly.profile_page_viewed'
  | 'calendly.event_type_viewed'
  | 'calendly.date_and_time_selected'
  | 'calendly.event_scheduled'

export const useCalendly = (url: MaybeRef<string>) => {
  const events: Record<CalendlyEvent, CalendlyListener[]> = {
    'calendly.profile_page_viewed': [],
    'calendly.event_type_viewed': [],
    'calendly.date_and_time_selected': [],
    'calendly.event_scheduled': [],
  }

  const open = (customAnswers?: Record<string, string>) =>
    window.Calendly?.initPopupWidget({
      url: unref(url),
      prefill: {
        customAnswers,
      },
    })

  const isCalendlyEvent = (
    e: MessageEvent,
  ): e is MessageEvent<{
    event: CalendlyEvent
    payload: any
  }> => {
    return (
      e.origin === 'https://calendly.com' &&
      e.data.event &&
      e.data.event.startsWith('calendly.')
    )
  }

  const onMessage = (e: MessageEvent): void => {
    if (!isCalendlyEvent(e)) return

    events[e.data.event]?.forEach((listener) => listener())
  }

  const addEventListener = (
    eventName: CalendlyEvent,
    listener: CalendlyListener,
  ) => {
    events[eventName] = events[eventName] || []
    events[eventName].push(listener)

    if (events[eventName].length === 1)
      window.addEventListener('message', onMessage)
  }

  const removeEventListener = (
    eventName: CalendlyEvent,
    listener: CalendlyListener,
  ) => {
    events[eventName] = events[eventName].filter(
      (handler) => handler !== listener,
    )
  }

  onMounted(() => window.addEventListener('message', onMessage))
  onBeforeUnmount(() => {
    window.removeEventListener('message', onMessage)
  })

  return {
    open,
    addEventListener,
    removeEventListener,
  }
}
