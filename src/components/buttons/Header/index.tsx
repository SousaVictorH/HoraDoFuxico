import React from 'react'

import Ionicons from '@expo/vector-icons/Ionicons'

import {
  Header,
  IconWrapper,
  HeaderText
} from './styles'
import { Props } from './types'

export const HeaderButton = ({
  onPress,
  text,
  textAlign
}: Props) => {
  return (
    <Header textAlign={textAlign}>
      <IconWrapper onPress={onPress}>
        <Ionicons name="arrow-back-outline" size={35} color="#252424" />
      </IconWrapper>
      <HeaderText>{text}</HeaderText>
      {textAlign === 'center' && (<IconWrapper />)}
    </Header>
  )
}

HeaderButton.defaultProps = {
  textAlign: 'left'
}
