import { LoggedWrapper } from 'templates/LoggedWrapper'

import { Connect } from 'components/connect'
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

export const HomeScreen = ({
  navigation
}: Props) => {
  const {
    name,
    birthDate,
    photo,
    connected,
    schedules,
    setIsConnected
  } = useUserStore()

  const age = calculateAge(birthDate)

  return (
    <LoggedWrapper navigation={navigation}>
      <ProfileWrapper>
        <ProfileImage
          source={photo ? { uri: photo } : images.defaultUser.path}
          resizeMode="cover"
        />
        <ProfileName>{name}</ProfileName>
        <ProfileAge>{age} anos</ProfileAge>
      </ProfileWrapper>
      <ContentWrapper>
        {
          !connected ? (
            <Connect setIsConnected={setIsConnected} />
          ) : (
            <Schedules
              schedules={schedules}
              navigation={navigation}
            />
          )
        }
      </ContentWrapper>
    </LoggedWrapper>
  )
}