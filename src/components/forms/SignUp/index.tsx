import { useState } from "react"
import { Alert } from "react-native"

import { FormWrapper } from "templates/FormWrapper"

import { next, nameInputPlaceholder, birthDateInputPlaceholder } from "constants/texts"
import { validateBirthDate } from "utils/date"

import {
  FormButton,
  ContentWrapper,
  Input,
  PhotoInput,
  InputCaption,
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
    else Alert.alert('Warning', message)
  }

  const isValid = (name.length > 3) && (birthDate.length === 10)

  return (
    <FormWrapper>
      <ContentWrapper>
        <InputCaption>{nameInputPlaceholder}</InputCaption>
        <Input
          value={name}
          setValue={(text: string) => setName(text)}
          placeholder={nameInputPlaceholder}
        />
        <InputCaption>{birthDateInputPlaceholder}</InputCaption>
        <DateTimeInput
          value={birthDate}
          setValue={setBirthDate}
          isDate
        />
        <PhotoInput
          photo={photo}
          setPhoto={setPhoto}
        />
        <FormButton
          onPress={handleSignUp}
          text={next}
          disabled={!isValid}
          appearance={isValid ? 'primary' : 'disabled'}
        />
      </ContentWrapper>
    </FormWrapper>
  )
}