export default defineNuxtRouteMiddleware((to) => {
  const host = process.server ? useRequestHeaders().host : window.location.host

  if (host.startsWith('www.')) {
    const newHost = host.replace('www.', '')

    const protocol = process.server
      ? useRequestHeaders()['x-forwarded-proto'] || 'https'
      : window.location.protocol

    const newUrl = `${protocol.replace(':', '')}://${newHost}${to.fullPath}`

    return navigateTo(newUrl, { external: true, redirectCode: 301 })
  }
})
