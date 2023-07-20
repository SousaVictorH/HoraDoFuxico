import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

import { LoggedWrapper } from 'templates/LoggedWrapper'

import { help, helpText } from 'constants/texts'

import {
  ContentWrapper,
  Header,
  HeaderText,
  IconWrapper,
  Container,
  Wrapper,
  HelpText
} from './styles'
import { Props } from "./types"

export const HelpScreen = ({
  navigation
}: Props) => {
  return (
    <LoggedWrapper hideHeader>
      <Wrapper>
        <Container>
          <Header onPress={() => navigation.goBack()}>
            <IconWrapper>
              <Ionicons name="arrow-back-outline" size={35} color="#252424" />
            </IconWrapper>
            <HeaderText>{help}</HeaderText>
          </Header>
        </Container>
        <ContentWrapper>
          <HelpText>{helpText}</HelpText>
        </ContentWrapper>
      </Wrapper>
    </LoggedWrapper>
  )
}