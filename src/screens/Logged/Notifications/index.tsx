import { LoggedWrapper } from 'templates/LoggedWrapper'

import { noMoreNotifications } from 'constants/texts'

import {
  ContentWrapper,
  Text
} from './styles'
import { Props } from "./types"

export const NotificationsScreen = ({
  navigation
}: Props) => {
  return (
    <LoggedWrapper navigation={navigation}>
      <ContentWrapper>
        <Text>{noMoreNotifications}</Text>
      </ContentWrapper>
    </LoggedWrapper>
  )
}