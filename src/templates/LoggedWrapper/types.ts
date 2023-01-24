import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"
import { RootStackParamList } from "routes/types"

export type Props = {
  children: React.ReactNode
  navigation: StackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>
}
