export type SupportedFeaturesMap<T extends string> = Map<T, number>

export type LightFeature =
  | 'SUPPORT_BRIGHTNESS'
  | 'SUPPORT_COLOR_TEMP'
  | 'SUPPORT_EFFECT'
  | 'SUPPORT_FLASH'
  | 'SUPPORT_COLOR'
  | 'SUPPORT_TRANSITION'
  | 'SUPPORT_WHITE_VALUE'

export const LIGHT_FEATURES_BIT_MAP: Record<number, LightFeature> = {
  1: 'SUPPORT_BRIGHTNESS',
  2: 'SUPPORT_COLOR_TEMP',
  4: 'SUPPORT_EFFECT',
  8: 'SUPPORT_FLASH',
  16: 'SUPPORT_COLOR',
  32: 'SUPPORT_TRANSITION',
  128: 'SUPPORT_WHITE_VALUE',
}

export type MediaPlayerFeature =
  | 'PAUSE'
  | 'SEEK'
  | 'VOLUME_SET'
  | 'VOLUME_MUTE'
  | 'PREVIOUS_TRACK'
  | 'NEXT_TRACK'
  | 'TURN_ON'
  | 'TURN_OFF'
  | 'PLAY_MEDIA'
  | 'VOLUME_STEP'
  | 'SELECT_SOURCE'
  | 'STOP'
  | 'CLEAR_PLAYLIST'
  | 'PLAY'
  | 'SHUFFLE_SET'
  | 'SELECT_SOUND_MODE'
  | 'BROWSE_MEDIA'
  | 'REPEAT_SET'
  | 'GROUPING'
  | 'MEDIA_ANNOUNCE'
  | 'MEDIA_ENQUEUE'

// https://github.com/home-assistant/core/blob/dev/homeassistant/components/media_player/const.py
export const MEDIA_PLAYER_FEATURES_BIT_MAP: Record<number, MediaPlayerFeature> =
  {
    1: 'PAUSE',
    2: 'SEEK',
    4: 'VOLUME_SET',
    8: 'VOLUME_MUTE',
    16: 'PREVIOUS_TRACK',
    32: 'NEXT_TRACK',
    128: 'TURN_ON',
    256: 'TURN_OFF',
    512: 'PLAY_MEDIA',
    1024: 'VOLUME_STEP',
    2048: 'SELECT_SOURCE',
    4096: 'STOP',
    8192: 'CLEAR_PLAYLIST',
    16384: 'PLAY',
    32768: 'SHUFFLE_SET',
    65536: 'SELECT_SOUND_MODE',
    131072: 'BROWSE_MEDIA',
    262144: 'REPEAT_SET',
    524288: 'GROUPING',
    1048576: 'MEDIA_ANNOUNCE',
    2097152: 'MEDIA_ENQUEUE',
  }

type FeatureMap = {
  light: LightFeature
  media_player: MediaPlayerFeature
}

type FeatureBitmapMap = {
  light: typeof LIGHT_FEATURES_BIT_MAP
  media_player: typeof MEDIA_PLAYER_FEATURES_BIT_MAP
}

export const getSupportedFeatures = <T extends keyof FeatureMap>(
  type: T,
  featureNumber: number | undefined,
): Map<FeatureMap[T], number> => {
  if (featureNumber === undefined) return new Map<FeatureMap[T], number>()

  const features = new Map<FeatureMap[T], number>()
  const featureMap: FeatureBitmapMap[T] = (
    type === 'light' ? LIGHT_FEATURES_BIT_MAP : MEDIA_PLAYER_FEATURES_BIT_MAP
  ) as FeatureBitmapMap[T]

  for (const key in featureMap) {
    if ((featureNumber & Number(key)) === Number(key)) {
      const feature = featureMap[Number(key)] as FeatureMap[T]
      features.set(feature, Number(key))
    }
  }

  return features
}
