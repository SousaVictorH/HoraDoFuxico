import React from 'react'

import { FormWrapper } from 'templates/FormWrapper'
import { TokenInput } from "components/inputs/TokenInput"

import { singInWithCode, resendCode } from 'constants/texts'

import { Label, Button } from './styles'
import { Props } from "./types"

export const AuthCodeForm = ({
  onSubmit,
  onResendCode
}: Props) => {
  const handleSubmit = async (token: string) => {
    return await onSubmit(token)
  }

  return (
    <FormWrapper justifyContent="flex-start" >
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