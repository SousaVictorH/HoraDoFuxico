import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

import { LoggedWrapper } from 'templates/LoggedWrapper'

import { images } from 'resources/images'
import { calculateAge } from 'utils/date'

import {
  ContentWrapper,
  Header,
  HeaderText,
  IconWrapper,
  Wrapper,
  ProfileImage,
  Text,
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
        <Header>
          <IconWrapper onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={35} color="#252424" />
          </IconWrapper>
          <HeaderText>{name}</HeaderText>
        </Header>
        <ContentWrapper>
          <ProfileImage
            source={{ uri: avatar }}
            defaultSource={images.defaultUser.path}
            resizeMode="cover"
          />
          <Text>{name}, {age} anos</Text>
        </ContentWrapper>
      </Wrapper>
    </LoggedWrapper>
  )
}