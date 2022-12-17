import React from "react"

export type ScreenWrapperProps = {
  children: React.ReactNode
  scroll?: boolean
  behavior: 'height' | 'padding' | 'position'
}