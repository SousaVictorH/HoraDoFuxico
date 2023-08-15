import { StyleProp, ViewStyle } from 'react-native'

export type Props = {
  photo: string
  setPhoto: (photo: string) => void
  style?: StyleProp<ViewStyle>;
}

export type ButtonTextProps = {
  photo: string
}
