import { StyleProp, ViewStyle } from 'react-native'
import { ButtonTextAppearanceOptions } from 'styles/types'

export type Props = {
  onPress: () => void
  text: string
  style?: StyleProp<ViewStyle>;
  appearance?: 'primary' | 'secondary'
}

export type TextProps = {
  appearance?: ButtonTextAppearanceOptions
}

