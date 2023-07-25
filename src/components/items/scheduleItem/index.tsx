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
  date,
  category
}: Schedule) => {
  const [scheduleDate, scheduleTime] = moment(date).format('DD/MM/YYYY HH:mm').split(' ')

  return (
    <Container>
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