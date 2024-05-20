export type SupportedFeature =
  | 'SUPPORT_BRIGHTNESS'
  | 'SUPPORT_COLOR_TEMP'
  | 'SUPPORT_EFFECT'
  | 'SUPPORT_FLASH'
  | 'SUPPORT_COLOR'
  | 'SUPPORT_TRANSITION'
  | 'SUPPORT_WHITE_VALUE'

export type SupportedFeaturesMap = Map<SupportedFeature, number>
