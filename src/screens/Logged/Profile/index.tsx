import React, { useState, useEffect } from 'react'
import Toast from 'react-native-toast-message'

import Ionicons from '@expo/vector-icons/Ionicons'

import { LoggedWrapper } from 'templates/LoggedWrapper'
import { Schedules } from 'components/schedules'

import { useUserStore } from 'store/user'
import { Schedule } from 'store/user/types'

import { loadSchedules as loadUserSchedules } from 'interfaces/api'

import { images } from 'resources/images'
import { calculateAge } from 'utils/date'

import {
  ContentWrapper,
  Header,
  HeaderText,
  IconWrapper,
  Wrapper,
  ProfileWrapper,
  UserImage,
  UserName
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

  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(2)

  const [isLoading, setIsLoading] = useState(false)
  const [showSpinner, setShowSpinner] = useState(false)

  const [schedules, setSchedules] = useState<Schedule[]>([])

  const loadSchedules = async (shouldReset: boolean) => {
    const currentPage = shouldReset ? 1 : page

    if (isLoading || currentPage > numberOfPages) return

    if (shouldReset) {
      setPage(currentPage)
      setNumberOfPages(currentPage + 1)
    }

    setIsLoading(true)
    setShowSpinner(true)
    const response = await loadUserSchedules(id, currentPage)
    setIsLoading(false)
    setShowSpinner(false)

    if (response.error) {
      return Toast.show({
        type: 'error',
        text1: 'Alerta',
        text2: 'Algo deu errado...'
      })
    }

    setPage(currentPage + 1)
    setNumberOfPages(response.data.numberOfPages)
    setSchedules([...schedules, ...response.data.schedules])
  }

  useEffect(() => {
    loadSchedules(false)
  }, [])

  const onSchedulePress = (schedule: Schedule) => {
    console.log(schedule)
  }

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
          <ProfileWrapper>
            <UserImage
              source={{ uri: avatar }}
              defaultSource={images.defaultUser.path}
              resizeMode="cover"
            />
            <UserName>{calculateAge(birthDate)} anos</UserName>
          </ProfileWrapper>
          <Schedules
            isUserProfile={user.id === id}
            navigation={navigation}
            onEndReached={() => loadSchedules(false)}
            schedules={schedules}
            isLoading={showSpinner}
            onSchedulePress={onSchedulePress}
          />
        </ContentWrapper>
      </Wrapper>
    </LoggedWrapper>
  )
}