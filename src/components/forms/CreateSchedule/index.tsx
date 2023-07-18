import React, { useState } from "react"
import Toast from "react-native-toast-message"

import moment from "moment"

import { DateTimeInput } from "components/inputs/DateTimeInput"

import { hotTopicsList } from "resources/hotTopics"

import { Schedule } from "store/user/types"

import {
  selectCategory,
  selectDayAndTime,
  save
} from 'constants/texts'

import {
  ContentWrapper,
  Title,
  RadioInputsContainer,
  RadioInput,
  Button
} from "./styles"
import { Props } from './types'

export const CreateScheduleForm = ({
  onSubmit
}: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSave = async () => {
    if (isLoading) return

    const day = Number(date.substring(0, 2))
    const month = Number(date.substring(3, 5)) - 1
    const year = Number(date.substring(6, 10))

    const hours = Number(time.substring(0, 2))
    const minutes = Number(time.substring(3, 5))

    const inputDate = moment(new Date(year, month, day, hours, minutes))
    const now = moment()

    if (!inputDate || !inputDate.isValid() || now.isAfter(inputDate)) {
      return Toast.show({
        type: 'error',
        text1: 'Aleta',
        text2: 'A data inserida é inválida'
      })
    }

    const schedule: Schedule = {
      date,
      time,
      title
    }

    setIsLoading(true)
    const success = await onSubmit(schedule)
    setIsLoading(false)

    if (success) {
      setTitle('')
      setDate('')
      setTime('')
    }
  }

  const isValid = (title.length !== 0) && (date.length === 10) && (time.length === 5)

  return (
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
        setValue={(time) => setTime(time)}
        isDate={false}
      />
      <Button
        text={save}
        onPress={handleSave}
        disabled={!isValid}
      />
    </ContentWrapper>
  )
}