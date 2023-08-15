import React from 'react'

import { LoggedWrapper } from 'templates/LoggedWrapper'
import { HeaderButton } from 'components/buttons/Header'

import { notifications, noMoreNotifications } from 'constants/texts'

import {
  ContentWrapper,
  Wrapper,
  NotificationsText
} from './styles'
import { Props } from './types'

export const NotificationsScreen = ({
  navigation
}: Props) => {
  return (
    <LoggedWrapper hideHeader>
      <Wrapper>
        <HeaderButton
          onPress={() => navigation.goBack()}
          text={notifications}
        />
        <ContentWrapper>
          <NotificationsText>{noMoreNotifications}</NotificationsText>
        </ContentWrapper>
      </Wrapper>
    </LoggedWrapper>
  )
}
