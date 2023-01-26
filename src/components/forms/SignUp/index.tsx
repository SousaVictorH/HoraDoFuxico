import { useState, useRef } from "react"
import { Alert, TextInput } from "react-native"

import { FormWrapper } from "templates/FormWrapper"

import { next, nameInputPlaceholder, birthDateInputPlaceholder } from "constants/texts"
import { maskDate, validateBirthDate } from "utils/date"

import { FormButton, ContentWrapper, Input, PhotoInput } from './styles'
import { Props } from "./types"

export const SignUpForm = ({
  onSignUp
}: Props) => {
  const birthDateInput = useRef<TextInput>(null)

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
        <Input
          value={name}
          setValue={(text: string) => setName(text)}
          placeholder={nameInputPlaceholder}
          onBlur={() => birthDateInput.current?.focus()}
        />
        <Input
          ref={birthDateInput}
          value={birthDate}
          setValue={(text: string) => setBirthDate(maskDate(text))}
          placeholder={birthDateInputPlaceholder}
          keyboardType="numeric"
          maxLength={10}
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