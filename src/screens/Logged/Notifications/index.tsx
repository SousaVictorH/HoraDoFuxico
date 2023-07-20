import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

import { LoggedWrapper } from 'templates/LoggedWrapper'

import { notifications, noMoreNotifications } from 'constants/texts'

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

export const NotificationsScreen = ({
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
            <HeaderText>{notifications}</HeaderText>
          </Header>
        </Container>
        <ContentWrapper>
          <HelpText>{noMoreNotifications}</HelpText>
        </ContentWrapper>
      </Wrapper>
    </LoggedWrapper>
  )
}