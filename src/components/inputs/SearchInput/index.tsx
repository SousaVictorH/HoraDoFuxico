import React, { useRef } from 'react'
import { TextInput as TextInputType } from 'react-native'

import Ionicons from '@expo/vector-icons/Ionicons'

import { Wrapper, TextInput, IconWrapper } from './styles'
import { Props } from './types'

export const SearchInput = ({
  value,
  onChangeText
}: Props) => {
  const inputRef = useRef<TextInputType>(null)

  return (
    <Wrapper>
      <IconWrapper onPress={() => inputRef.current?.focus()}>
        <Ionicons name="search" size={21} color="#252424" />
      </IconWrapper>
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
      />
    </Wrapper>
  )
}
