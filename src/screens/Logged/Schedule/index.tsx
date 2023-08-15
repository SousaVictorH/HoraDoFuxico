import React from 'react'

import { LoggedWrapper } from 'templates/LoggedWrapper'
import { HeaderButton } from 'components/buttons/Header'

import {
  ContentWrapper,
  ScheduleCategory,
  Wrapper
} from './styles'
import { Props } from './types'

export const ScheduleScreen = ({
  navigation,
  route
}: Props) => {
  const {
    category,
  } = route.params

  return (
    <LoggedWrapper hideHeader>
      <Wrapper>
        <HeaderButton
          onPress={() => navigation.goBack()}
          text={'Agendamento'}
        />
        <ContentWrapper>
          <ScheduleCategory>{category}</ScheduleCategory>
        </ContentWrapper>
      </Wrapper>
    </LoggedWrapper>
  )
}
