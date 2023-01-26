import { useState } from "react"
import moment from "moment"

import { LoggedWrapper } from "templates/LoggedWrapper"

import { DateTimeInput } from "components/inputs/DateTimeInput"

import { GoBackIcon } from 'resources/svgIcons'
import { hotTopicsList } from "resources/hotTopics"

import { useStore } from 'store'
import { Schedule } from "store/types"

import {
  schedule,
  selectCategory,
  selectDayAndTime,
  save
} from 'constants/texts'
import { HOME_SCREEN } from "constants/screens"

import { Props } from "./types"
import {
  Container,
  Header,
  IconWrapper,
  HeaderText,
  ContentWrapper,
  Title,
  RadioInputsContainer,
  RadioInput,
  Button
} from "./styles"
import { Alert } from "react-native"

export const NewScheduleScreen = ({
  navigation
}: Props) => {
  const { createSchedule } = useStore()

  const [title, setTitle] = useState(hotTopicsList[0].title)
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSave = () => {
    const day = Number(date.substring(0, 2))
    const month = Number(date.substring(3, 5)) - 1
    const year = Number(date.substring(6, 10))

    const hours = Number(time.substring(0, 2))
    const minutes = Number(time.substring(3, 5))

    const inputDate = moment(new Date(year, month, day, hours, minutes))
    const now = moment()

    if (!inputDate || now.isAfter(inputDate)) {
      return Alert.alert('Alerta', 'Data inválida')
    }

    const schedule: Schedule = {
      date,
      time,
      title
    }

    createSchedule(schedule)

    // Clear
    setTitle(hotTopicsList[0].title)
    setDate('')
    setTime('')

    navigation.navigate(HOME_SCREEN)
  }

  const isValid = date.length === 10 && time.length === 5

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
        <RadioInputsContainer>
          {
            hotTopicsList.map((hotTopic, index) => (
              <RadioInput
                key={index.toString()}
                active={title === hotTopic.title}
                onPress={() => setTitle(hotTopic.title)}
                text={hotTopic.title}
              />
            ))
          }
        </RadioInputsContainer>
        <Title>{selectDayAndTime}</Title>
        <DateTimeInput
          value={date}
          setValue={setDate}
          isDate={true}
          minimumDate={new Date()}
        />
        <DateTimeInput
          value={time}
          setValue={setTime}
          isDate={false}
          minuteInterval={10}
        />
        <Button
          text={save}
          onPress={handleSave}
          disabled={!isValid}
          appearance={isValid ? 'primary' : 'disabled'}
        />
      </ContentWrapper>
    </LoggedWrapper>
  )
}