
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "routes/types"

import { Schedule } from "store/types"

export type Props = {
  schedules: Schedule[]
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>
}
