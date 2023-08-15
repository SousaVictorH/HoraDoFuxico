import React from 'react'

export type Props = {
  children: React.ReactNode
  hideHeader: boolean
  scroll?: boolean
  toggleSidePanel: () => void
}
