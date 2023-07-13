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

export const HomeScreen = ({
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
    <LoggedWrapper navigation={navigation}>
      <ProfileWrapper>
        <ProfileImage
          source={avatar ? { uri: avatar } : images.defaultUser.path}
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