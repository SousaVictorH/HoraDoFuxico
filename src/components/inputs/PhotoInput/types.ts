import { StyleProp, ViewStyle } from "react-native";

export type Props = {
  setPhoto: (photo: string) => void
  style?: StyleProp<ViewStyle>;
}