import React from 'react'

import { LoggedWrapper } from 'templates/LoggedWrapper'

import { useUserStore } from 'store/user'

import { images } from 'resources/images'

import { calculateAge } from 'utils/date'

import {
  ProfileWrapper,
  ProfileImage,
  ProfileName,
  ProfileAge,
  ContentWrapper,
  Text
} from './styles'
import { Props } from "./types"

export const MyProfileScreen = ({
  toggleSidePanel
}: Props) => {
  const {
    name,
    birthDate,
    avatar
  } = useUserStore()

  const age = calculateAge(birthDate)

  return (
    <LoggedWrapper toggleSidePanel={toggleSidePanel}>
      <ProfileWrapper>
        <ProfileImage
          source={{ uri: avatar }}
          defaultSource={images.defaultUser.path}
          resizeMode="cover"
        />
        <ProfileName>{name}</ProfileName>
        <ProfileAge>{age} anos</ProfileAge>
      </ProfileWrapper>
      <ContentWrapper>
        <Text>Perfil</Text>
      </ContentWrapper>
    </LoggedWrapper>
  )
}