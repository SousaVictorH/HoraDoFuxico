import { StyleProp, ViewStyle } from "react-native"

export type Props = {
  value: string
  setValue: (value: string) => void
  isDate: boolean
  style?: StyleProp<ViewStyle>
  maximumDate?: Date
  minimumDate?: Date
  minuteInterval?: 3 | 2 | 1 | 10 | 5 | 4 | 6 | 12 | 15 | 20 | 30
}