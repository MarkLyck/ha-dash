import type { IconProp } from '@fortawesome/fontawesome-svg-core'

export const getRoomIcon = (room: string) => {
  const roomName = room.toLowerCase()
  const icon: IconProp = ['fas', 'square']

  if (roomName.includes('living')) icon[1] = 'loveseat'
  if (roomName.includes('bedroom')) icon[1] = 'bed-alt'
  if (roomName.includes('guest room')) icon[1] = 'bed-empty'
  if (roomName.includes('kids room')) icon[1] = 'bed-bunk'
  if (roomName.includes('play room')) icon[1] = 'star'
  if (roomName.includes('nursery') || roomName.includes('baby'))
    icon[1] = 'baby'
  if (roomName.includes('hall')) icon[1] = 'walking'
  if (roomName.includes('entry')) icon[1] = 'door-closed'
  if (roomName.includes('stair')) icon[1] = 'stairs'
  if (roomName.includes('kitchen')) icon[1] = 'oven'
  if (roomName.includes('pantry')) icon[1] = 'can-food'
  if (roomName.includes('dining')) icon[1] = 'utensils'
  if (roomName.includes('bathroom')) icon[1] = 'bathtub'
  if (roomName.includes('toilet')) icon[1] = 'toilet'
  if (roomName.includes('office')) icon[1] = 'briefcase'
  if (roomName.includes('tv')) icon[1] = 'tv'
  if (roomName.includes('cinema')) icon[1] = 'camera-movie'
  if (roomName.includes('garage')) icon[1] = 'garage'
  if (roomName.includes('art')) icon[1] = 'paint-brush'
  if (roomName.includes('workshop')) icon[1] = 'tools'
  if (roomName.includes('man cave')) icon[1] = 'axe'
  if (roomName.includes('gaming')) icon[1] = 'gamepad-alt'
  if (roomName.includes('laundry')) icon[1] = 'washing-machine'
  if (roomName.includes('mudroom')) icon[1] = 'boot'
  if (roomName.includes('bar')) icon[1] = 'whiskey-glass-ice'
  if (roomName.includes('basement')) icon[1] = 'arrow-down'
  if (roomName.includes('balcony')) icon[1] = 'question-circle'
  if (roomName.includes('patio')) icon[1] = 'question-circle'
  if (roomName.includes('attic') || roomName.includes('roof'))
    icon[1] = 'arrow-up'
  if (roomName.includes('pool')) icon[1] = 'swimming-pool'
  if (roomName.includes('sauna')) icon[1] = 'hot-tub'
  if (roomName.includes('shed')) icon[1] = 'cabin'
  if (roomName.includes('library') || roomName.includes('reading'))
    icon[1] = 'books'
  if (roomName.includes('outdoor') || roomName.includes('outside'))
    icon[1] = 'trees'
  if (roomName.includes('yard') || roomName.includes('garden'))
    icon[1] = 'sun-plant-wilt'
  if (roomName.includes('wine')) icon[1] = 'wine-bottle'
  if (roomName.includes('gym') || roomName.includes('workout'))
    icon[1] = 'dumbbell'

  return icon
}
