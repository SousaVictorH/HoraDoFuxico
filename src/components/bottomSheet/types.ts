import React from 'react'

export interface Props {
  snapPoints: string[],
  enablePanDownToClose: boolean,
  shouldRenderBackdrop: boolean,
  index: number,
  children?: React.ReactNode
}
