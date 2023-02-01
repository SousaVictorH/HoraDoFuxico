import { Alert } from "react-native"

import { LoggedWrapper } from "templates/LoggedWrapper"
import { ProfileForm } from "components/forms/Profile"

import { GoBackIcon } from "resources/svgIcons"
import { editYourInfo } from "constants/texts"

import { useStore } from "store"

import { validateBirthDate } from "utils/date"

import { Props } from "./types"
import {
  Wrapper,
  Container,
  Header,
  IconWrapper,
  HeaderText,
  ContentWrapper,
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

  const handleSave = (newName: string, newPhoneNumber: string, newBirthDate: string, newPhoto?: string) => {
    const { isValid, message } = validateBirthDate(newBirthDate)

    if (!isValid) {
      Alert.alert('Alerta', message)
    } else {
      // Set data
      setPersonalData(newName, newBirthDate, newPhoto || '')
      setPhoneNumber(newPhoneNumber)

      navigation.goBack()
    }
  }

  return (
    <LoggedWrapper navigation={navigation} hideHeader scroll >
      <Wrapper>
        <Container>
          <Header onPress={() => navigation.goBack()}>
            <IconWrapper>
              <GoBackIcon />
            </IconWrapper>
            <HeaderText>{editYourInfo}</HeaderText>
          </Header>
        </Container>
        <ContentWrapper>
          <ProfileForm
            name={name}
            phoneNumber={phoneNumber}
            birthDate={birthDate}
            photo={photo}
            handleSubmit={handleSave}
          />
        </ContentWrapper>
      </Wrapper>
    </LoggedWrapper>
  )
}