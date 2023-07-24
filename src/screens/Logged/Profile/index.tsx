import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

import { LoggedWrapper } from 'templates/LoggedWrapper'

import { goBack } from 'constants/texts'

import { calculateAge } from 'utils/date'

import {
  ContentWrapper,
  Header,
  HeaderText,
  IconWrapper,
  Container,
  Wrapper,
  Text
} from './styles'
import { Props } from "./types"

export const ProfileScreen = ({
  navigation,
  route
}: Props) => {
  const {
    id,
    name,
    phoneNumber,
    birthDate,
    avatar,
  } = route.params

  const age = calculateAge(birthDate)

  return (
    <LoggedWrapper hideHeader>
      <Wrapper>
        <Container>
          <Header onPress={() => navigation.goBack()}>
            <IconWrapper>
              <Ionicons name="arrow-back-outline" size={35} color="#252424" />
            </IconWrapper>
            <HeaderText>{goBack}</HeaderText>
          </Header>
        </Container>
        <ContentWrapper>
          <Text>{name}, {age} anos</Text>
        </ContentWrapper>
      </Wrapper>
    </LoggedWrapper>
  )
}