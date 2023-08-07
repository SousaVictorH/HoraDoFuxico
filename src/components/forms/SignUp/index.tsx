import React, { useState } from "react"
import { View } from "react-native"

import Toast from 'react-native-toast-message'

import { FormWrapper } from "templates/FormWrapper"

import { next, nameInputPlaceholder, birthDateInputPlaceholder } from "constants/texts"
import { validateBirthDate } from "utils/date"

import {
  FormButton,
  ContentWrapper,
  InputWrapper,
  InputCaption,
  Input,
  PhotoInput,
  DateTimeInput
} from './styles'
import { Props } from "./types"

export const SignUpForm = ({
  onSignUp
}: Props) => {
  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [photo, setPhoto] = useState('')

  const handleSignUp = () => {
    const { isValid, message } = validateBirthDate(birthDate)

    if (isValid) onSignUp({ name, birthDate, photo })
    else Toast.show({
      type: 'error',
      text1: 'Aleta',
      text2: message
    })
  }

  const isValid = (name.length > 3) && (birthDate.length === 10)

  return (
    <FormWrapper>
      <ContentWrapper>
        <View>
          <InputWrapper>
            <InputCaption>{nameInputPlaceholder}</InputCaption>
            <Input
              value={name}
              setValue={(text: string) => setName(text)}
              placeholder={nameInputPlaceholder}
            />
          </InputWrapper>
          <InputWrapper>
            <InputCaption>{birthDateInputPlaceholder}</InputCaption>
            <DateTimeInput
              value={birthDate}
              setValue={setBirthDate}
              isDate
            />
          </InputWrapper>
          <PhotoInput
            photo={photo}
            setPhoto={setPhoto}
          />
        </View>
        <FormButton
          onPress={handleSignUp}
          text={next}
          disabled={!isValid}
        />
      </ContentWrapper>
    </FormWrapper>
  )
}