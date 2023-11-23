import { StyleProp, ViewStyle } from 'react-native'

export type Props = {
  id: string
  name: string
  avatar?: string
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}
