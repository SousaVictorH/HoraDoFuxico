import React, { useState } from 'react'

import { ScheduleService } from 'services/ScheduleService'

import { LoggedWrapper } from 'templates/LoggedWrapper'
import { HeaderButton } from 'components/buttons/Header'

import { useUserStore } from 'store/user'
import { Schedule } from 'store/user/types'

import { SCHEDULE_SCREEN } from 'constants/screens'

import { images } from 'resources/images'
import { calculateAge } from 'utils/date'

import {
  Wrapper,
  HeaderContainer,
  ProfileWrapper,
  UserImage,
  UserName,
  SchedulesList,
} from './styles'
import { Props } from './types'

export const ProfileScreen = ({ navigation, route }: Props) => {
  const user = useUserStore()

  const { id, name, birthDate, avatar } = route.params

  const [schedules, setSchedules] = useState<Schedule[]>([])

  const loadUserSchedules = async (page: number) => {
    return await ScheduleService.loadSchedules(id, page)
  }

  const onSchedulePress = (schedule: Schedule) => {
    navigation.push(SCHEDULE_SCREEN, { id: schedule.id || '' })
  }

  const renderListHeaderComponent = () => (
    <HeaderContainer>
      <HeaderButton
        onPress={() => navigation.goBack()}
        text={name}
        textAlign="center"
      />
      <ProfileWrapper>
        <UserImage
          source={{ uri: avatar || undefined }}
          defaultSource={images.defaultUser.path}
          resizeMode="cover"
        />
        <UserName>{calculateAge(birthDate)} anos</UserName>
      </ProfileWrapper>
    </HeaderContainer>
  )

  return (
    <LoggedWrapper navigation={navigation} hideHeader>
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
