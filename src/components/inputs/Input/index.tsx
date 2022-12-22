import React, { Ref } from 'react'
import { TextInput as TextInputType } from 'react-native'

import { TextInput } from './styles'
import { Props } from './types'

export const Input = React.forwardRef(({
  autoFocus,
  keyboardType,
  value,
  setValue,
  maxLength,
  style
}: Props, ref?: Ref<TextInputType>) => {
  return (
    <TextInput
      ref={ref}
      autoFocus={autoFocus}
      value={value}
      onChangeText={setValue}
      keyboardType={keyboardType}
      maxLength={maxLength}
      style={style}
    />
  )
})

Input.defaultProps = {
  autoFocus: false,
  value: '',
  maxLength: 1
}
