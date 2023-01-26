import { useState } from "react"

import { LoggedWrapper } from "templates/LoggedWrapper"

import { GoBackIcon } from 'resources/svgIcons'
import { schedule, selectCategory, selectDayAndTime } from 'constants/texts'
import { HOME_SCREEN } from "constants/screens"

import { useStore } from 'store'

import { Props } from "./types"
import {
  Container,
  Header,
  IconWrapper,
  HeaderText,
  ContentWrapper,
  Title
} from "./styles"

export const NewScheduleScreen = ({
  navigation
}: Props) => {
  const { createSchedule } = useStore()

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  return (
    <LoggedWrapper hideHeader>
      <Container>
        <Header onPress={() => navigation.navigate(HOME_SCREEN)}>
          <IconWrapper>
            <GoBackIcon />
          </IconWrapper>
          <HeaderText>{schedule}</HeaderText>
        </Header>
      </Container>
      <ContentWrapper>
        <Title>{selectCategory}</Title>
        <Title>{selectDayAndTime}</Title>
      </ContentWrapper>
    </LoggedWrapper>
  )
}