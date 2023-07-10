import React from 'react'
import ToastComponent from 'react-native-toast-message'

import { Wrapper } from './styles'

export const Toast = () => (
  <Wrapper>
    <ToastComponent
      autoHide
      visibilityTime={2000}
      position='top'
    />
  </Wrapper>
)
