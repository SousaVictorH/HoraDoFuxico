import React from 'react'

import { LoggedWrapper } from 'templates/LoggedWrapper'
import { Schedules } from 'components/schedules'

import { useUserStore } from 'store/user'
import { useUserSchedulesStore } from 'store/userSchedules'
import { Schedule } from 'store/user/types'

import { loadSchedules } from 'interfaces/api'

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
    id,
    name,
    birthDate,
    avatar
  } = useUserStore()
  const { schedules, setSchedules } = useUserSchedulesStore()

  const loadUserSchedules = async (page: number) => {
    return await loadSchedules(id, page)
  }

  const onSchedulePress = (schedule: Schedule) => {
    console.log(schedule)
  }

  return (
    <LoggedWrapper toggleSidePanel={toggleSidePanel}>
      <ProfileWrapper>
        <ProfileImage
          source={{ uri: avatar }}
          defaultSource={images.defaultUser.path}
          resizeMode="cover"
        />
        <ProfileName>{name}</ProfileName>
        <ProfileAge>{calculateAge(birthDate)} anos</ProfileAge>
      </ProfileWrapper>
      <ContentWrapper>
        <Schedules
          navigation={navigation}
          schedules={schedules}
          onSchedulePress={onSchedulePress}
          setSchedules={setSchedules}
          loadUserSchedules={loadUserSchedules}
          showButton
        />
      </ContentWrapper>
    </LoggedWrapper>
  )
}