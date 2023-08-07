import React, { useState } from "react"

import Toast from "react-native-toast-message"

import { LoggedWrapper } from "templates/LoggedWrapper"
import { CreateScheduleForm } from "components/forms/CreateSchedule"
import { HeaderButton } from "components/buttons/Header"

import { useUserStore } from 'store/user'
import { useUserSchedulesStore } from "store/userSchedules"
import { Schedule } from "store/user/types"

import { schedule } from 'constants/texts'
import { createSchedule } from "interfaces/api"

import { ContentWrapper } from "./styles"
import { Props } from "./types"

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

    setIsLoading(true)
    const response = await createSchedule(id, category, date, time)
    setIsLoading(false)

    if (response.error) {
      Toast.show({
        type: 'error',
        text1: 'Alerta',
        text2: 'Algo deu errado...'
      })

      return false
    }

    Toast.show({
      type: 'success',
      text1: 'Sucesso',
      text2: 'Agendamento realizado com sucesso'
    })

    const createdSchedule = response.data

    userScheduleStore.addSchedule(createdSchedule)
    addSchedule(createdSchedule.id)

    setTimeout(() => navigation.goBack(), 300)

    return true
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