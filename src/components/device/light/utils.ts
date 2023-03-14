import Color from 'colorjs.io'

export const calculateContrast = (color: string | undefined) => {
  if (!color) return 0

  let contrast = 0
  try {
    const lightColor = new Color(color)
    const backgroundColor = new Color('white')

    // if the contrast is too low, use a different color
    // e.g. if a user sets the light to "white" on a white background, it should not show as white
    contrast = lightColor.contrastWCAG21(backgroundColor)
  } catch (err) {
    console.error(err)
  }

  return contrast
}
