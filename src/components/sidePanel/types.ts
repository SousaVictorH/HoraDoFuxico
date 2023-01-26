import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "routes/types"

export type Props = {
  showSidePanel: boolean
  toggleSidePanel: () => void
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>
}
