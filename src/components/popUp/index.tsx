import React, { useEffect } from 'react'

import { usePopUpStore } from 'store/popUp'
import { PopUpProps } from 'store/popUp/types'

export const PopUp = () => {
  const { popUp } = usePopUpStore()

  useEffect(() => {
    if (popUp) handleShowPopUp(popUp)
  }, [popUp])

  const handleShowPopUp = async (popUpProps: PopUpProps) => {
    console.log(popUpProps)
  }

  return (
    <>
    </>
  )
}
