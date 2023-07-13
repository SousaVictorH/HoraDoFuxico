import React, { useState } from "react"
import Toast from "react-native-toast-message"

import moment from "moment"

import { LoggedWrapper } from "templates/LoggedWrapper"
import { ProfileForm } from "components/forms/Profile"

import { update } from "interfaces/api"

import { GoBackIcon } from "resources/svgIcons"
import { editYourInfo } from "constants/texts"
import { WELCOME_SCREEN } from "constants/screens"

import { useUserStore } from "store/user"

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
    id,
    token,
    name,
    avatar,
    phoneNumber,
    dateOfBirth,
    setPersonalData,
    clearPersonalData
  } = useUserStore()

  const birthDate = moment(dateOfBirth).format('DD/MM/YYYY')

  const [isLoading, setIsLoading] = useState(false)

  const handleSave = async (
    newName: string,
    newPhoneNumber: string,
    newBirthDate: string,
    newPhoto?: string
  ) => {
    if (isLoading) return

    const { isValid, message } = validateBirthDate(newBirthDate)

    if (!isValid) {
      return Toast.show({
        type: 'error',
        text1: 'Alerta',
        text2: message
      })
    }

    setIsLoading(true)
    const response = await update(id, token, newName, newBirthDate, newPhoneNumber, newPhoto)
    setIsLoading(false)

    if (response.error) {
      const error = '' + response.error

      if (error.includes('401')) {
        // token expired
        Toast.show({
          type: 'error',
          text1: 'Alerta',
          text2: 'Seu token expirou'
        })

        setTimeout(() => {
          clearPersonalData()
          navigation.navigate(WELCOME_SCREEN)
        }, 300)
      } else {
        Toast.show({
          type: 'error',
          text1: 'Alerta',
          text2: 'Algo deu errado'
        })
      }

      return
    }

    Toast.show({
      type: 'success',
      text1: 'Sucesso',
      text2: 'Seus dados foram atualizados com sucesso'
    })

    setPersonalData(response.data)
    setTimeout(() => navigation.goBack(), 300)
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
            photo={avatar}
            handleSubmit={handleSave}
          />
        </ContentWrapper>
      </Wrapper>
    </LoggedWrapper>
  )
}