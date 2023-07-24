import React from "react"

import Ionicons from '@expo/vector-icons/Ionicons'

import {
  Header,
  IconWrapper,
  HeaderText
} from "./styles"
import { Props } from "./types"

export const HeaderButton = ({
  onPress,
  text
}: Props) => {
  return (
    <Header onPress={onPress}>
      <IconWrapper>
        <Ionicons name="arrow-back-outline" size={35} color="#252424" />
      </IconWrapper>
      <HeaderText>{text}</HeaderText>
    </Header>
  )
}