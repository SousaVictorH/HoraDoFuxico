import {
  KeyboardTypeOptions,
  StyleProp,
  ViewStyle
} from "react-native"

export type Props = {
  autoFocus?: boolean
  value: string
  setValue: (text: string) => void
  keyboardType?: KeyboardTypeOptions
  maxLength?: number
  style?: StyleProp<ViewStyle>
  placeholder?: string
}