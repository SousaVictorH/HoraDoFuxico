import { LoggedWrapper } from 'templates/LoggedWrapper'

import { noMoreNotifications } from 'constants/texts'

import {
  ContentWrapper,
  Text
} from './styles'
import { Props } from "./types"

export const NotificationsScreen = ({
  toggleSidePanel
}: Props) => {
  return (
    <LoggedWrapper toggleSidePanel={toggleSidePanel}>
      <ContentWrapper>
        <Text>{noMoreNotifications}</Text>
      </ContentWrapper>
    </LoggedWrapper>
  )
}