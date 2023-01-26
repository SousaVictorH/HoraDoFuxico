import { useState } from "react"
import { Alert } from "react-native"

import { LoggedWrapper } from "templates/LoggedWrapper"

import { PhotoInput } from "components/inputs/PhotoInput"

import { GoBackIcon } from "resources/svgIcons"
import {
  save,
  editYourInfo,
  namePlaceholder,
  phonePlaceholder,
  birthDateInputPlaceholder
} from "constants/texts"

import { useStore } from "store"

import { phoneMask } from "utils/phone"
import { validateBirthDate } from "utils/date"

import { Props } from "./types"
import {
  Container,
  Header,
  IconWrapper,
  HeaderText,
  ContentWrapper,
  Title,
  Button,
  DateTimeInput,
  Input
} from "./styles"

export const ProfileScreen = ({
  navigation
}: Props) => {
  const {
    name,
    phoneNumber,
    birthDate,
    photo,
    setPersonalData,
    setPhoneNumber
  } = useStore()

  const [newName, setNewName] = useState(name)
  const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber)
  const [newBirthDate, setNewBirthDate] = useState(birthDate)
  const [newPhoto, setNewPhoto] = useState(photo)

  const handleSave = () => {
    const { isValid, message } = validateBirthDate(newBirthDate)

    if (!isValid) {
      Alert.alert('Alerta', message)
    } else {
      // Set data
      setPersonalData(newName, newBirthDate, newPhoto)
      setPhoneNumber(newPhoneNumber)

      navigation.goBack()
    }
  }

  const isValid =
    (newName.length > 3) &&
    (newPhoneNumber.length === 10) &&
    (newBirthDate.length === 10)

  return (
    <LoggedWrapper navigation={navigation} hideHeader>
      <Container>
        <Header onPress={() => navigation.goBack()}>
          <IconWrapper>
            <GoBackIcon />
          </IconWrapper>
          <HeaderText>{editYourInfo}</HeaderText>
        </Header>
      </Container>
      <ContentWrapper>
        <Title>{namePlaceholder}</Title>
        <Input
          value={newName}
          setValue={text => setNewName(text)}
          placeholder={namePlaceholder}
        />
        <Title>{phonePlaceholder}</Title>
        <Input
          value={newPhoneNumber}
          setValue={text => setNewPhoneNumber(phoneMask(text))}
          placeholder={phonePlaceholder}
          maxLength={10}
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
          onPress={handleSave}
          disabled={!isValid}
          appearance={isValid ? 'primary' : 'disabled'}
        />
      </ContentWrapper>
    </LoggedWrapper>
  )
}