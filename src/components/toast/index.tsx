import React, { useState, useEffect } from 'react'

import { Wrapper } from './styles'
import { Toast } from './Toast'

import { useToastStore } from 'store/toast'
import { ToastProps } from 'store/toast/types'

export default () => {
  const { toast } = useToastStore()

  const [toastList, setToastList] = useState<ToastProps[]>([])

  useEffect(() => {
    if (toast) launchToast(toast)
  }, [toast])

  const launchToast = async (toast: ToastProps) => {
    if (toastList.length === 0) {
      setToastList([toast])
    } else {
      setToastList([])

      setTimeout(() => {
        setToastList([toast])
      }, 120)
    }

    // create time out to clear
  }

  if (toastList.length === 0) return null

  return (
    <Wrapper>
      {toastList.map((toast) => (
        <Toast key={toast.description} {...toast} />
      ))}
    </Wrapper>
  )
}
