export const getSpacing = (step = 0.5) => {
  const spacing = {}
  for (let i = 0; i <= 200; i += step) {
    spacing[`${i}`] = `${i * 4}px`
  }
  return spacing
}
