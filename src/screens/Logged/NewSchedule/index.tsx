import React from "react"

import Ionicons from '@expo/vector-icons/Ionicons'
import Toast from "react-native-toast-message"

import { LoggedWrapper } from "templates/LoggedWrapper"
import { CreateScheduleForm } from "components/forms/CreateSchedule"

import { useUserStore } from 'store/user'
import { Schedule } from "store/user/types"

import { schedule } from 'constants/texts'

import { Props } from "./types"
import {
  Container,
  Header,
  IconWrapper,
  HeaderText
} from "./styles"

export const NewScheduleScreen = ({
  navigation,
  toggleSidePanel
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
    <LoggedWrapper hideHeader toggleSidePanel={toggleSidePanel}>
      <Container>
        <Header onPress={() => navigation.goBack()}>
          <IconWrapper>
            <Ionicons name="arrow-back-outline" size={35} color="#252424" />
          </IconWrapper>
          <HeaderText>{schedule}</HeaderText>
        </Header>
      </Container>
      <CreateScheduleForm onSubmit={onSubmit} />
    </LoggedWrapper>
  )
}