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

export const ProfileScreen = ({
  toggleSidePanel
}: Props) => {
  const {
    name,
    birthDate,
    avatar,
    schedules
  } = useUserStore()

  const age = calculateAge(birthDate)

  return (
    <LoggedWrapper toggleSidePanel={toggleSidePanel}>
      <ProfileWrapper>
        <ProfileImage
          source={avatar ? { uri: avatar } : images.defaultUser.path}
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