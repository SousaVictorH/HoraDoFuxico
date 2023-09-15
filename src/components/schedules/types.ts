import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'
import { RootParamList } from 'routes/types'

import { Schedule } from 'store/user/types'

export type Props = {
  schedules: Schedule[]
  navigation: StackNavigationProp<RootParamList, keyof RootParamList, undefined>
  onSchedulePress: (schedule: Schedule) => void
  setSchedules: (schedules: Schedule[]) => void
  showButton: boolean
  loadUserSchedules: (page: number) => Promise<any>
  ListHeaderComponent?: ReactNode
  style?: StyleProp<ViewStyle>
}
