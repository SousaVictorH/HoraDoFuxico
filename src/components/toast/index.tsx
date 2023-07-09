import React, { useEffect } from 'react'

import { useToastStore } from 'store/toast'
import { ToastProps } from 'store/toast/types'

export default () => {
  const { toast } = useToastStore()

  useEffect(() => {
    if (toast) launchToast(toast)
  }, [toast])

  const launchToast = async (toastProps: ToastProps) => {
    console.log(toastProps)
  }

  return (
    <>
    </>
  )
}
