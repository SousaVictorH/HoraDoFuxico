import React, { Ref, useCallback, useMemo } from 'react'

import BottomSheetType, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'

import { BottomSheetComponent } from './styles'
import { Props } from './types'

export const BottomSheet = React.forwardRef(({
  snapPoints,
  enablePanDownToClose,
  index,
  shouldRenderBackdrop,
  children
}: Props, ref?: Ref<BottomSheetType>) => {
  const bottomSheetSnapPoints = useMemo(() => snapPoints, [])

  const renderBackdropComponent = useCallback(
    (props: any) =>
      <BottomSheetBackdrop
        appearsOnIndex={1}
        disappearsOnIndex={-1}
        {...props}
      />,
    []
  )

  return (
    <BottomSheetComponent
      ref={ref}
      snapPoints={bottomSheetSnapPoints}
      enablePanDownToClose={enablePanDownToClose}
      index={index}
      backdropComponent={shouldRenderBackdrop ? renderBackdropComponent : undefined}
    >
      {children}
    </BottomSheetComponent>
  )
})

BottomSheet.defaultProps = {
  index: -1,
  enablePanDownToClose: true,
  shouldRenderBackdrop: true,
  snapPoints: ['50%']
}
