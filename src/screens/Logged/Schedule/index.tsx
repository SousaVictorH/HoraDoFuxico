import React from 'react'

import { LoggedWrapper } from 'templates/LoggedWrapper'
import { HeaderButton } from 'components/buttons/Header'

import { details } from 'constants/texts'

// import { useUserStore } from 'store/user'
// import { useUserSchedulesStore } from 'store/userSchedules'

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
  // const userStore = useUserStore()
  // const { schedules, setSchedules } = useUserSchedulesStore()

  const {
    category,
    // id
  } = route.params

  // const scheduled = userStore.schedules.includes(id || '')

  return (
    <LoggedWrapper hideHeader>
      <Wrapper>
        <HeaderButton
          onPress={() => navigation.goBack()}
          text={details}
          textAlign='center'
        />
        <ContentWrapper>
          <ScheduleCategory>{category}</ScheduleCategory>
        </ContentWrapper>
      </Wrapper>
    </LoggedWrapper>
  )
}
