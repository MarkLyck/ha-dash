import { clsx } from 'clsx'
import type { ClassValue } from 'clsx'
import Color from 'colorjs.io'
import { twMerge } from 'tailwind-merge'

import type { EntityRegistry } from './types/homeAssistant'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isSSR = typeof window === 'undefined'

export const calculateContrast = (
  color1: string | undefined,
  color2: string | undefined,
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

export const hexToRgb = (hex: string): [number, number, number] => {
  const hexValue = hex.charAt(0) === '#' ? hex.slice(1) : hex
  const r = Number.parseInt(hexValue.slice(0, 2), 16)
  const g = Number.parseInt(hexValue.slice(2, 4), 16)
  const b = Number.parseInt(hexValue.slice(4, 6), 16)
  return [r, g, b]
}

export const debounce = (func: (...args: any[]) => any, wait: number) => {
  let timeout: NodeJS.Timeout

  return (...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const getEntitiesByType = (entities: EntityRegistry[], type: string) => {
  return entities.filter((entity) => entity.entity_id.startsWith(type))
}
