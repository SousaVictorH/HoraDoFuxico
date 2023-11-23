import React from 'react'
import ToastComponent from 'react-native-toast-message'

import { Wrapper } from './styles'
import { toastConfig } from './config'

export const Toast = () => (
  <Wrapper>
    <ToastComponent
      autoHide
      visibilityTime={1200}
      position='top'
      config={toastConfig}
    />
  </Wrapper>
)
