import { StyleProp, ViewStyle } from "react-native"

export type Props = {
  value: string
  setValue: (value: string) => void
  isDate: boolean
  style?: StyleProp<ViewStyle>
  maximumDate?: Date
  minimumDate?: Date
}