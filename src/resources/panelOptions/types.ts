import React from "react"

import { RootStackParamList } from "routes/types"

export type PanelOption = {
  icon: React.ReactNode
  title: string
  navigateTo: keyof RootStackParamList
}
