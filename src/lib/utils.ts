import { clsx } from 'clsx'
import type { ClassValue } from 'clsx'
import Color from 'colorjs.io'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isSSR = typeof window === 'undefined'

export const calculateContrast = (
  color1: string | undefined,
  color2: string | undefined
): number => {
  if (!color1 || !color2) return 0

  let contrast = 0
  try {
    const lightColor = new Color(color1)
    const backgroundColor = new Color(color2)

    // if the contrast is too low, use a different color
    // e.g. if a user sets the light to "white" on a white background, it should not show as white
    contrast = lightColor.contrastWCAG21(backgroundColor)
  } catch (err) {
    console.error(err)
  }

  return contrast
}
