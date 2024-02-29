declare global {
  interface Window {
    dataLayer: any[]
  }
}

export default defineNuxtPlugin(() => {
  const gtag = (...args: any[]): void => {
    window.dataLayer.push(args)
  }

  if (process.client) {
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=AW-16461428444`
    script.async = true
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []

    gtag('js', new Date())

    gtag('config', 'AW-16461428444')
  }

  return {
    provide: {
      gtag,
    },
  }
})
