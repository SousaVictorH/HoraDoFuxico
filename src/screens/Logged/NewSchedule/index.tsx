import React from "react"

import Toast from "react-native-toast-message"

import { LoggedWrapper } from "templates/LoggedWrapper"
import { CreateScheduleForm } from "components/forms/CreateSchedule"
import { HeaderButton } from "components/buttons/Header"

import { useUserStore } from 'store/user'
import { Schedule } from "store/user/types"

import { schedule } from 'constants/texts'

import { Props } from "./types"

export const NewScheduleScreen = ({
  navigation
}: Props) => {
  const { createSchedule } = useUserStore()

  const onSubmit = async (schedule: Schedule) => {
    createSchedule(schedule)

    Toast.show({
      type: 'success',
      text1: 'Sucesso',
      text2: 'Agendamento realizado com sucesso'
    })

    setTimeout(() => navigation.goBack(), 500)

    return true
  }

  return (
    <LoggedWrapper hideHeader>
      <HeaderButton
        onPress={() => navigation.goBack()}
        text={schedule}
      />
      <CreateScheduleForm onSubmit={onSubmit} />
    </LoggedWrapper>
  )
}