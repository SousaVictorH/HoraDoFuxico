import { LoggedWrapper } from 'templates/LoggedWrapper'

import {
  ContentWrapper,
  Text
} from './styles'
import { Props } from "./types"

export const ProfileScreen = ({
  toggleSidePanel
}: Props) => {
  return (
    <LoggedWrapper toggleSidePanel={toggleSidePanel}>
      <ContentWrapper>
        <Text>Perfil</Text>
      </ContentWrapper>
    </LoggedWrapper>
  )
}