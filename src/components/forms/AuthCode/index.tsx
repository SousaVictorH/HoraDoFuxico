import { useState } from 'react'

import { FormWrapper } from 'templates/FormWrapper'
import { TokenInput } from "components/inputs/TokenInput"

import { singInWithCode, resendCode } from 'constants/texts'

import { Label, Button } from './styles'
import { Props } from "./types"

export const AuthCodeForm = ({
  onSubmit,
  onResendCode
}: Props) => {
  const handleSubmit = (token: string) => {
    onSubmit(token)
  }

  return (
    <FormWrapper>
      <Label>{singInWithCode}</Label>
      <TokenInput
        onSubmit={handleSubmit}
      />
      <Button
        text={resendCode}
        onPress={onResendCode}
      />
    </FormWrapper>
  )
}