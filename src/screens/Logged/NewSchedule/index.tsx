import React, { useState } from 'react'

import Toast from 'react-native-toast-message'

import { AxiosResponse } from 'axios'
import { ScheduleService } from 'services/ScheduleService'

import { LoggedWrapper } from 'templates/LoggedWrapper'
import { CreateScheduleForm } from 'components/forms/CreateSchedule'
import { HeaderButton } from 'components/buttons/Header'

import { useUserStore } from 'store/user'
import { useUserSchedulesStore } from 'store/userSchedules'
import { Schedule } from 'store/user/types'

import { schedule } from 'constants/texts'

import { ContentWrapper } from './styles'
import { Props } from './types'

export const NewScheduleScreen = ({
  navigation
}: Props) => {
  const { id, addSchedule } = useUserStore()
  const userScheduleStore = useUserSchedulesStore()

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async ({
    category,
    date,
    time
  }: Schedule) => {
    if (isLoading) return false

    let shouldReset = false
    setIsLoading(true)

    ScheduleService.createSchedule(id, category, date, time)
      .then((response: AxiosResponse) => {
        Toast.show({
          type: 'success',
          text1: 'Sucesso',
          text2: 'Agendamento realizado com sucesso'
        })

        const createdSchedule = response.data

        userScheduleStore.addSchedule(createdSchedule)
        addSchedule(createdSchedule.id)

        setTimeout(() => navigation.goBack(), 300)

        shouldReset = true
      })
      .catch(() => {
        Toast.show({
          type: 'error',
          text1: 'Alerta',
          text2: 'Algo deu errado...'
        })
      })
      .finally(() => setIsLoading(false))

    return shouldReset
  }

  return (
    <LoggedWrapper hideHeader scroll>
      <ContentWrapper>
        <HeaderButton
          onPress={() => navigation.goBack()}
          text={schedule}
        />
        <CreateScheduleForm
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </ContentWrapper>
    </LoggedWrapper>
  )
}
