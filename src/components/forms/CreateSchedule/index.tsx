import React, { useState } from 'react'
import Toast from 'react-native-toast-message'

import moment from 'moment'

import { hotTopicsList } from 'resources/hotTopics'

import { Schedule } from 'store/user/types'

import { selectCategory, selectDayAndTime, save } from 'constants/texts'

import {
  ContentWrapper,
  InputCaption,
  RadioInputsContainer,
  RadioInput,
  DateTimeInput,
  Button,
} from './styles'
import { Props } from './types'

export const CreateScheduleForm = ({ onSubmit, isLoading }: Props) => {
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSave = async () => {
    const day = Number(date.substring(0, 2))
    const month = Number(date.substring(3, 5)) - 1
    const year = Number(date.substring(6, 10))

    const hours = Number(time.substring(0, 2))
    const minutes = Number(time.substring(3, 5))

    const inputDate = moment(new Date(year, month, day, hours, minutes))
    const now = moment()

    if (!inputDate.isValid() || !inputDate.isAfter(now.add(30, 'minutes'))) {
      return Toast.show({
        type: 'error',
        text1: 'Aleta',
        text2: 'A data inserida é inválida',
      })
    }

    const schedule: Schedule = {
      date,
      time,
      category,
    }

    const success = await onSubmit(schedule)

    if (success) {
      setTimeout(() => {
        setCategory('')
        setDate('')
        setTime('')
      }, 500)
    }
  }

  const isValid =
    category.length !== 0 && date.length === 10 && time.length === 5

  return (
    <ContentWrapper>
      <InputCaption>{selectCategory}</InputCaption>
      <RadioInputsContainer>
        {hotTopicsList.map((hotTopic, index) => (
          <RadioInput
            key={index.toString()}
            active={category === hotTopic.category}
            onPress={() => setCategory(hotTopic.category)}
            text={hotTopic.category}
          />
        ))}
      </RadioInputsContainer>
      <InputCaption>{selectDayAndTime}</InputCaption>
      <DateTimeInput
        value={date}
        setValue={setDate}
        isDate={true}
        minimumDate={new Date()}
      />
      <DateTimeInput
        value={time}
        setValue={(time) => setTime(time.slice(0, 4) + '0')}
        isDate={false}
        minuteInterval={10}
      />
      <Button
        text={save}
        onPress={handleSave}
        disabled={!isValid}
        isLoading={isLoading}
      />
    </ContentWrapper>
  )
}
