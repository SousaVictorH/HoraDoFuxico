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
  style,
  placeholder,
  onBlur
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
      placeholder={placeholder}
      onBlur={onBlur}
    />
  )
})

Input.defaultProps = {
  autoFocus: false,
  value: ''
}
