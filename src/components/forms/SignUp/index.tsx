import { useState } from "react"

import { FormWrapper } from "templates/FormWrapper"
import { Input } from "components/inputs/Input"

import { next } from "constants/texts"

import {
  FormButton,
  ContentWrapper
} from './styles'
import { Props } from "./types"

export const SignUpForm = ({
  onSignUp
}: Props) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(-1)
  const [photo, setPhoto] = useState('')

  return (
    <FormWrapper>
      <ContentWrapper>
        <Input
          value={name}
          setValue={(text: string) => setName(text)}
        />
        <FormButton
          onPress={() => onSignUp({ name, age, photo })}
          text={next}
          marginTop="lg"
        />
      </ContentWrapper>
    </FormWrapper>
  )
}