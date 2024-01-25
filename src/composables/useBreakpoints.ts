export interface Breakpoints {
  xs: boolean
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
}

export const useBreakpoints = () => {
  const value = reactive<Breakpoints>({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  })

  if (process.browser) {
    const breakpoints: [keyof Breakpoints, number][] = [
      ['xs', 560],
      ['sm', 767],
      ['md', 1024],
      ['lg', 1280],
      ['xl', 1680],
    ]

    breakpoints.forEach(([alias, width]) => {
      const media = matchMedia(`(max-width: ${width}px)`)

      media.addEventListener('change', (e) => {
        value[alias] = e.matches
      })

      value[alias] = media.matches
    })
  }

  return value
}
