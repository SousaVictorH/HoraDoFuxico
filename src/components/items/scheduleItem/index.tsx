import React from 'react'
import moment from 'moment'

import Ionicons from '@expo/vector-icons/Ionicons'

import { Schedule } from "store/user/types"

import {
  Container,
  TitleContainer,
  DateContainer,
  TimeContainer,
  Text,
  Caption
} from "./styles"

export const ScheduleItem = ({
  id,
  date,
  category,
  users,
  onPress
}: Schedule & {
  onPress: (schedule: Schedule) => void
}) => {
  const [scheduleDate, scheduleTime] = moment(date).format('DD/MM/YYYY HH:mm').split(' ')

  const handlePress = () => {
    onPress({
      id,
      date,
      category,
      users
    })
  }

  return (
    <Container onPress={handlePress}>
      <TitleContainer>
        <Text>{category}</Text>
      </TitleContainer>
      <DateContainer>
        <Ionicons name="calendar" size={22} color="#DD9064" />
        <Caption>{scheduleDate}</Caption>
      </DateContainer>
      <TimeContainer>
        <Ionicons name="time" size={22} color="#DD9064" />
        <Caption>{scheduleTime}</Caption>
      </TimeContainer>
    </Container>
  )
}