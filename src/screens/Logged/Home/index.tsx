import React from 'react'

import { ScheduleService } from 'services/ScheduleService'

import { LoggedWrapper } from 'templates/LoggedWrapper'
import { Schedules } from 'components/schedules'
import { HotTopics } from 'components/hotTopics'

import { useUserStore } from 'store/user'
import { useUserSchedulesStore } from 'store/userSchedules'
import { Schedule } from 'store/user/types'

import { SCHEDULE_SCREEN } from 'constants/screens'

import { ContentWrapper } from './styles'
import { Props } from './types'

export const HomeScreen = ({
  navigation,
  toggleSidePanel
}: Props) => {
  const { id } = useUserStore()
  const { schedules, setSchedules } = useUserSchedulesStore()

  const loadUserSchedules = async (page: number) => {
    return await ScheduleService.loadSchedules(id, page)
  }

  const onSchedulePress = (schedule: Schedule) => {
    navigation.navigate(SCHEDULE_SCREEN, { ...schedule })
  }

  return (
    <LoggedWrapper toggleSidePanel={toggleSidePanel}>
      <ContentWrapper>
        <Schedules
          navigation={navigation}
          schedules={schedules}
          onSchedulePress={onSchedulePress}
          setSchedules={setSchedules}
          loadUserSchedules={loadUserSchedules}
          showButton
          ListHeaderComponent={<HotTopics />}
        />
      </ContentWrapper>
    </LoggedWrapper>
  )
}
