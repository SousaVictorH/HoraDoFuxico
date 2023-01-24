import { LoggedWrapper } from 'templates/LoggedWrapper'

import { useStore } from 'store'

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
    photo
  } = useStore()

  const age = calculateAge(birthDate)

  return (
    <LoggedWrapper navigation={navigation}>
      <ProfileWrapper>
        <ProfileImage
          source={{ uri: photo }}
          resizeMode="cover"
        />
        <ProfileName>{name}</ProfileName>
        <ProfileAge>{age} anos</ProfileAge>
      </ProfileWrapper>
      <ContentWrapper>
        {/** CONTENT */}
      </ContentWrapper>
    </LoggedWrapper>
  )
}