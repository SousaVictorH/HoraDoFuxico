import { LoggedWrapper } from 'templates/LoggedWrapper'

import { Schedules } from 'components/schedules'

import { useUserStore } from 'store/user'

import { Header, HeaderText, ContentWrapper } from './styles'
import { Props } from "./types"

export const HomeScreen = ({
  navigation,
  toggleSidePanel
}: Props) => {
  const { name, schedules } = useUserStore()

  return (
    <LoggedWrapper toggleSidePanel={toggleSidePanel}>
      <ContentWrapper>
        <Header>
          <HeaderText>Olá, {name}.</HeaderText>
        </Header>
        <Schedules
          schedules={schedules}
          navigation={navigation}
        />
      </ContentWrapper>
    </LoggedWrapper>
  )
}