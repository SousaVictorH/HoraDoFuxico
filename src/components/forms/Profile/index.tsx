import { useState } from "react"

import { PhotoInput } from "components/inputs/PhotoInput"

import { phoneMask } from "utils/phone"

import {
  save,
  namePlaceholder,
  phonePlaceholder,
  birthDateInputPlaceholder
} from "constants/texts"

import {
  Container,
  Button,
  DateTimeInput,
  Input,
  Title
} from "./styles"
import { Props } from './types'

export const ProfileForm = ({
  birthDate,
  handleSubmit,
  name,
  phoneNumber,
  photo
}: Props) => {
  const [newName, setNewName] = useState(name)
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneMask(phoneNumber))
  const [newBirthDate, setNewBirthDate] = useState(birthDate)
  const [newPhoto, setNewPhoto] = useState(photo)

  const isValid =
    (newName.length > 3) &&
    (newPhoneNumber.length === 12) &&
    (newBirthDate.length === 10)

  const handlePress = () => {
    handleSubmit(newName, newPhoneNumber, newBirthDate, newPhoto)
  }

  return (
    <Container>
      <Title>{namePlaceholder}</Title>
      <Input
        value={newName}
        setValue={text => setNewName(text)}
        placeholder={namePlaceholder}
        editable
      />
      <Title>{phonePlaceholder}</Title>
      <Input
        value={newPhoneNumber}
        setValue={text => setNewPhoneNumber(phoneMask(text))}
        placeholder={phonePlaceholder}
        keyboardType="numeric"
        maxLength={11}
        editable={false}
      />
      <Title>{birthDateInputPlaceholder}</Title>
      <DateTimeInput
        value={newBirthDate}
        setValue={setNewBirthDate}
        isDate
      />
      <PhotoInput
        photo={newPhoto}
        setPhoto={setNewPhoto}
      />
      <Button
        text={save}
        onPress={handlePress}
        disabled={!isValid}
        appearance={isValid ? 'primary' : 'disabled'}
      />
    </Container>
  )
}