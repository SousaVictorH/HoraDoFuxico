import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "routes/types"

export type Props = {
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>
}
