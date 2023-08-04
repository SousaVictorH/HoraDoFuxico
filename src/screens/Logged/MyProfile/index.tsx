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
  ContentWrapper
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

  return (
    <LoggedWrapper toggleSidePanel={toggleSidePanel}>
      <ProfileWrapper>
        <ProfileImage
          source={{ uri: avatar || undefined }}
          defaultSource={images.defaultUser.path}
          resizeMode="cover"
        />
        <ProfileName>{name}</ProfileName>
        <ProfileAge>{calculateAge(birthDate)} anos</ProfileAge>
      </ProfileWrapper>
      <ContentWrapper>
        <ProfileName>Assuntos favoritos</ProfileName>
      </ContentWrapper>
    </LoggedWrapper>
  )
}