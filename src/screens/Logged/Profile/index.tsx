import React, { useState } from "react"
import Toast from "react-native-toast-message"

import Ionicons from '@expo/vector-icons/Ionicons'

import moment from "moment"

import { LoggedWrapper } from "templates/LoggedWrapper"
import { ProfileForm } from "components/forms/Profile"

import { update } from "interfaces/api"

import { editYourInfo } from "constants/texts"

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
    name,
    avatar,
    phoneNumber,
    birthDate,
    setPersonalData
  } = useUserStore()

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

    const newPhone = newPhoneNumber.replace('-', '')

    setIsLoading(true)
    const response = await update(id, newName, newBirthDate, newPhone, newPhoto)
    setIsLoading(false)

    if (response.error) {
      const statusText = '' + response.error

      if (!statusText.includes('403')) {
        // Forbidden errors are already handled
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
    <LoggedWrapper hideHeader scroll >
      <Wrapper>
        <Container>
          <Header onPress={() => navigation.goBack()}>
            <IconWrapper>
              <Ionicons name="arrow-back-outline" size={35} color="#252424" />
            </IconWrapper>
            <HeaderText>{editYourInfo}</HeaderText>
          </Header>
        </Container>
        <ContentWrapper>
          <ProfileForm
            name={name}
            phoneNumber={phoneNumber}
            birthDate={moment(birthDate).format('DD/MM/YYYY')}
            photo={avatar}
            handleSubmit={handleSave}
          />
        </ContentWrapper>
      </Wrapper>
    </LoggedWrapper>
  )
}