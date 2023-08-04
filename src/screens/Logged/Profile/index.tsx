import React, { useState } from 'react'

import Ionicons from '@expo/vector-icons/Ionicons'

import { LoggedWrapper } from 'templates/LoggedWrapper'

import { useUserStore } from 'store/user'
import { Schedule } from 'store/user/types'

import { loadSchedules } from 'interfaces/api'
import { SCHEDULE_SCREEN } from 'constants/screens'

import { images } from 'resources/images'
import { calculateAge } from 'utils/date'

import {
  Header,
  HeaderText,
  IconWrapper,
  Wrapper,
  ProfileWrapper,
  UserImage,
  UserName,
  SchedulesList
} from './styles'
import { Props } from "./types"

export const ProfileScreen = ({
  navigation,
  route
}: Props) => {
  const user = useUserStore()

  const {
    id,
    name,
    phoneNumber,
    birthDate,
    avatar,
  } = route.params

  const [schedules, setSchedules] = useState<Schedule[]>([])

  const loadUserSchedules = async (page: number) => {
    return await loadSchedules(id, page)
  }

  const onSchedulePress = (schedule: Schedule) => {
    navigation.navigate(SCHEDULE_SCREEN, { ...schedule })
  }

  const renderListHeaderComponent = () => (
    <>
      <Header>
        <IconWrapper onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={35} color="#252424" />
        </IconWrapper>
        <HeaderText>{name}</HeaderText>
      </Header>
      <ProfileWrapper>
        <UserImage
          source={{ uri: avatar || undefined }}
          defaultSource={images.defaultUser.path}
          resizeMode="cover"
        />
        <UserName>{calculateAge(birthDate)} anos</UserName>
      </ProfileWrapper>
    </>
  )

  return (
    <LoggedWrapper hideHeader>
      <Wrapper>
        <SchedulesList
          navigation={navigation}
          schedules={schedules}
          onSchedulePress={onSchedulePress}
          setSchedules={setSchedules}
          loadUserSchedules={loadUserSchedules}
          showButton={user.id === id}
          ListHeaderComponent={renderListHeaderComponent()}
        />
      </Wrapper>
    </LoggedWrapper>
  )
}