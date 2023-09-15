import React from 'react'

import type { NavigationProp } from '@react-navigation/native'
import { RootParamList } from 'routes/types'

export type Props = {
  navigation: NavigationProp<RootParamList>
  children: React.ReactNode
  hideHeader: boolean
  scroll?: boolean
}
