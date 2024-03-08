export const useLinks = () => {
  const runtimeConfig = useRuntimeConfig()

  return {
    home: '/',
    reverseOsmosis: '/reverse-osmosis',
    reverseOsmosisPrice: '/reverse-osmosis/price',
    homeFiltration: '/home-filtration',
    homeFiltrationPrice: '/home-filtration/price',
    installationPrice: '/installation/price',
    leakDetection: '/leak-detection',
    contacts: '/contacts',
    quiz: 'https://4c1l5fjfk5j.typeform.com/to/Fp5uxxP8',
    knowledgeBase: 'https://docs.clarityatl.com/',
    consultation: runtimeConfig.public.consultationUrl,
    blog: '/',
    report: 'https://www.ewg.org/tapwater/',
  }
}
