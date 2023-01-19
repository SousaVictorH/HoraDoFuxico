import { useState } from "react"

import { FormWrapper } from "templates/FormWrapper"

import { next, nameInputPlaceholder, birthDateInputPlaceholder } from "constants/texts"
import { maskDate, validateBirthDate } from "utils/date"

import { FormButton, ContentWrapper, Input, PhotoInput } from './styles'
import { Props } from "./types"

export const SignUpForm = ({
  onSignUp
}: Props) => {
  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [photo, setPhoto] = useState('')

  const handleSignUp = () => {
    console.log(name)
    console.log(birthDate)

    console.log(validateBirthDate(birthDate))
    // onSignUp({ name, birthDate, photo })
  }

  return (
    <FormWrapper>
      <ContentWrapper>
        <Input
          value={name}
          setValue={(text: string) => setName(text)}
          placeholder={nameInputPlaceholder}
        />
        <Input
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
        />
      </ContentWrapper>
    </FormWrapper>
  )
}