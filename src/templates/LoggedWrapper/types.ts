import React from "react"

import { StackNavigationProp } from "@react-navigation/stack"
import { RootStackParamList } from "routes/types"

export type Props = {
  children: React.ReactNode
  hideHeader: boolean
  scroll?: boolean
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>
}
