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
  time,
  title
}: Schedule) => {
  return (
    <Container>
      <TitleContainer>
        <Text>{title}</Text>
      </TitleContainer>
      <DateContainer>
        <Ionicons name="calendar" size={22} color="#DD9064" />
        <Caption>{date}</Caption>
      </DateContainer>
      <TimeContainer>
        <Ionicons name="time" size={22} color="#DD9064" />
        <Caption>{time}</Caption>
      </TimeContainer>
    </Container>
  )
}