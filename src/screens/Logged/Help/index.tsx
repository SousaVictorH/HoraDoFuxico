import { LoggedWrapper } from 'templates/LoggedWrapper'

import { useStore } from 'store'

import {
  Text
} from './styles'
import { Props } from "./types"

export const HelpScreen = ({
  navigation
}: Props) => {
  const {
    name,
    birthDate,
    photo
  } = useStore()

  return (
    <LoggedWrapper navigation={navigation}>
      <Text>Help Screen</Text>
    </LoggedWrapper>
  )
}