import React from 'react'

import { Container } from './styles'
import { Props } from './types'

export const FormWrapper = ({ justifyContent, children }: Props) => {
  return (
    <Container justifyContent={justifyContent}>
      {children}
    </Container>
  )
}

FormWrapper.defaultProps = {
  justifyContent: 'space-between'
}
