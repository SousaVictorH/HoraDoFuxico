import React, { useState, useEffect } from 'react'
import Toast from 'react-native-toast-message'

import { LoggedWrapper } from 'templates/LoggedWrapper'
import { Schedules } from 'components/schedules'

import { useUserStore } from 'store/user'

import { loadSchedules as loadUserSchedules } from 'interfaces/api'

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
    avatar,
    schedules,
    setSchedules
  } = useUserStore()

  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(2)

  const [isLoading, setIsLoading] = useState(false)
  const [showSpinner, setShowSpinner] = useState(false)

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
          schedules={schedules}
          navigation={navigation}
          onEndReached={() => loadSchedules(false)}
          isLoading={showSpinner}
        />
      </ContentWrapper>
    </LoggedWrapper>
  )
}