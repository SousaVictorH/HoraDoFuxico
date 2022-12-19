import React, { Ref } from 'react'
import { TextInput } from 'react-native'

import { InputWrapper, Input } from './styles'
import { Props } from './types'

export const PartInput = React.forwardRef(({
  autoFocus,
  keyboardType,
  value,
  setValue,
  callNext,
  callPrevious,
  maxLength
}: Props, ref?: Ref<TextInput>) => {
  return (
    <InputWrapper>
      <Input
        ref={ref}
        autoFocus={autoFocus}
        value={value}
        onChangeText={(text) => {
          setValue(text)

          if (text) callNext()
          else callPrevious && callPrevious()
        }}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
    </InputWrapper>
  )
})

PartInput.defaultProps = {
  autoFocus: false,
  keyboardType: 'numeric',
  value: '',
  maxLength: 1
}
