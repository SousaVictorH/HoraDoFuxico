import { CalendarIcon, ClockIcon } from "resources/svgIcons"
import { Schedule } from "store/types"

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
        <CalendarIcon height={20} width={20} />
        <Caption>{date}</Caption>
      </DateContainer>
      <TimeContainer>
        <ClockIcon height={20} width={20} />
        <Caption>{time}</Caption>
      </TimeContainer>
    </Container>
  )
}