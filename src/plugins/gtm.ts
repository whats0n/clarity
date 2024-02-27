declare global {
  interface Window {
    dataLayer: any[]
  }
}

export default defineNuxtPlugin(() => {
  if (process.client) {
    const script = document.createElement('script')
    script.src = `https://www.googletagmanager.com/gtag/js?id=AW-16461428444`
    script.async = true
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []

    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }

    gtag('js', new Date())

    gtag('config', 'AW-16461428444')
  }
})
