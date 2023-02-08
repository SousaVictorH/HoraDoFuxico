import { LoggedWrapper } from "templates/LoggedWrapper"
import { ProfileForm } from "components/forms/Profile"

import { GoBackIcon } from "resources/svgIcons"
import { editYourInfo } from "constants/texts"

import { useStore } from "store"
import { usePopUpStore } from "store/popUp"

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

  const { launchPopUp } = usePopUpStore()

  const handleSave = (newName: string, newPhoneNumber: string, newBirthDate: string, newPhoto?: string) => {
    const { isValid, message } = validateBirthDate(newBirthDate)

    if (!isValid) {
      launchPopUp({
        type: "WARNING",
        title: 'Alerta',
        description: message
      })
    } else {
      // Set data
      setPersonalData(newName, newBirthDate, newPhoto || '')
      setPhoneNumber(newPhoneNumber)

      launchPopUp({
        type: "SUCCESS",
        title: 'Sucesso',
        description: 'Seus dados foram atualizados com sucesso'
      })

      setTimeout(() => navigation.goBack(), 500)
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