export const useDropdown = () => {
  const opened = ref<boolean>(false)
  const containerRef = ref<HTMLElement>()

  const onDocumentClick = ({ target }: Event) => {
    if (
      target instanceof Node &&
      containerRef.value &&
      (containerRef.value.contains(target) || target === containerRef.value)
    )
      return

    opened.value = false
  }

  watch(opened, (opened) => {
    if (opened) document.addEventListener('click', onDocumentClick, true)
    else document.removeEventListener('click', onDocumentClick, true)
  })

  return { opened, containerRef }
}
