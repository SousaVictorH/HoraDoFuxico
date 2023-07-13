import React, { Ref } from 'react'
import { TextInput } from 'react-native'

import { Input } from './styles'
import { Props } from './types'

export const PartInput = React.forwardRef(({
  contextMenuHidden,
  selectTextOnFocus,
  editable,
  keyboardType,
  onChangeText,
  onKeyPress
}: Props, ref?: Ref<TextInput>) => {
  return (
    <Input
      ref={ref}
      onChangeText={onChangeText}
      onKeyPress={onKeyPress}
      contextMenuHidden={contextMenuHidden}
      selectTextOnFocus={selectTextOnFocus}
      editable={editable}
      maxLength={1}
      keyboardType={keyboardType}
    />
  )
})

PartInput.defaultProps = {
  keyboardType: 'decimal-pad',
}
