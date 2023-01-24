import { LoggedWrapper } from 'templates/LoggedWrapper'

import { useStore } from 'store'

import {
  Text
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

  return (
    <LoggedWrapper navigation={navigation}>
      <Text>Home Screen</Text>
    </LoggedWrapper>
  )
}