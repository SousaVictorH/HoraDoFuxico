import React from 'react'

import { LoggedWrapper } from 'templates/LoggedWrapper'
import { Schedules } from 'components/schedules'

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
  toggleSidePanel,
  navigation
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
          source={{ uri: avatar }}
          defaultSource={images.defaultUser.path}
          resizeMode="cover"
        />
        <ProfileName>{name}</ProfileName>
        <ProfileAge>{age} anos</ProfileAge>
      </ProfileWrapper>
      <ContentWrapper>
        <Schedules
          schedules={schedules}
          navigation={navigation}
        />
      </ContentWrapper>
    </LoggedWrapper>
  )
}