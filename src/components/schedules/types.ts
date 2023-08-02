import { ReactNode } from "react"
import { StyleProp, ViewStyle } from 'react-native'

import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "routes/types"

import { Schedule } from "store/user/types"

export type Props = {
  schedules: Schedule[]
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>
  onSchedulePress: (schedule: Schedule) => void
  setSchedules: (schedules: Schedule[]) => void
  showButton: boolean
  loadUserSchedules: (page: number) => Promise<any>
  ListHeaderComponent?: ReactNode
  scrollTitle?: boolean
  style?: StyleProp<ViewStyle>
}
