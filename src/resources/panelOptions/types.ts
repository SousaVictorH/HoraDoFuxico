import React from 'react'

import { RootParamList } from 'routes/types'

export type PanelOption = {
  icon: React.ReactNode
  title: string
  navigateTo: keyof RootParamList
}
