import type { IconProp } from '@fortawesome/fontawesome-svg-core'

export const getAreaIcon = (area: string) => {
  const areaName = area.toLowerCase()
  const icon: IconProp = ['far', 'table-layout']

  if (areaName.includes('living')) icon[1] = 'loveseat'
  if (areaName.includes('balcony')) icon[1] = 'window-frame-open'
  if (areaName.includes('bedarea')) icon[1] = 'bed-alt'
  if (areaName.includes('guest area')) icon[1] = 'bed-empty'
  if (areaName.includes('kids area')) icon[1] = 'bed-bunk'
  if (areaName.includes('play area')) icon[1] = 'star'
  if (areaName.includes('nursery') || areaName.includes('baby'))
    icon[1] = 'baby'
  if (areaName.includes('hall')) icon[1] = 'walking'
  if (areaName.includes('entry')) icon[1] = 'door-closed'
  if (areaName.includes('stair')) icon[1] = 'stairs'
  if (areaName.includes('kitchen')) icon[1] = 'oven'
  if (areaName.includes('pantry')) icon[1] = 'can-food'
  if (areaName.includes('dining')) icon[1] = 'utensils'
  if (areaName.includes('batharea')) icon[1] = 'bathtub'
  if (areaName.includes('toilet')) icon[1] = 'toilet'
  if (areaName.includes('office')) icon[1] = 'briefcase'
  if (areaName.includes('tv')) icon[1] = 'tv'
  if (areaName.includes('cinema')) icon[1] = 'camera-movie'
  if (areaName.includes('garage')) icon[1] = 'garage'
  if (areaName.includes('art')) icon[1] = 'paint-brush'
  if (areaName.includes('workshop')) icon[1] = 'tools'
  if (areaName.includes('man cave')) icon[1] = 'axe'
  if (areaName.includes('gaming')) icon[1] = 'gamepad-alt'
  if (areaName.includes('laundry')) icon[1] = 'washing-machine'
  if (areaName.includes('mudarea')) icon[1] = 'boot'
  if (areaName.includes('bar')) icon[1] = 'whiskey-glass-ice'
  if (areaName.includes('basement')) icon[1] = 'arrow-down'
  if (areaName.includes('balcony')) icon[1] = 'question-circle'
  if (areaName.includes('patio')) icon[1] = 'question-circle'
  if (areaName.includes('attic') || areaName.includes('roof'))
    icon[1] = 'arrow-up'
  if (areaName.includes('pool')) icon[1] = 'swimming-pool'
  if (areaName.includes('sauna')) icon[1] = 'hot-tub'
  if (areaName.includes('shed')) icon[1] = 'cabin'
  if (areaName.includes('library') || areaName.includes('reading'))
    icon[1] = 'books'
  if (areaName.includes('outdoor') || areaName.includes('outside'))
    icon[1] = 'trees'
  if (areaName.includes('yard') || areaName.includes('garden'))
    icon[1] = 'sun-plant-wilt'
  if (areaName.includes('wine')) icon[1] = 'wine-bottle'
  if (areaName.includes('gym') || areaName.includes('workout'))
    icon[1] = 'dumbbell'

  return icon
}
