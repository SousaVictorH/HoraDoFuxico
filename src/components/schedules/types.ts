
import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "routes/types"

import { Schedule } from "store/user/types"

export type Props = {
  schedules: Schedule[]
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>
  onEndReachedThreshold?: number
  onEndReached: () => void
  isLoading?: boolean
  isUserProfile?: boolean
  onSchedulePress: (schedule: Schedule) => void
}
