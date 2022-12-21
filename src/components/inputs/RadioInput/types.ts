import { StyleProp, ViewStyle } from "react-native"

export type Props = {
  active: boolean
  onPress: () => void
  text: string
  style?: StyleProp<ViewStyle>
}