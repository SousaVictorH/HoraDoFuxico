import React, { useState } from 'react'
import Toast from 'react-native-toast-message'

import { requestLogin, login } from 'interfaces/api'
import { useUserStore } from "store/user"

import { ScreenWrapper } from 'templates/ScreenWrapper'
import { AuthCodeForm } from 'components/forms/AuthCode'

import { promoteFun } from 'constants/texts'
import { LOGGED_NAVIGATOR, TERMS_SCREEN } from 'constants/screens'

import { images } from 'resources/images'

import {
  ContentWrapper,
  AppNameImage,
  SubTitle,
  AppImage,
  FormContainer
} from './styles'
import { Props } from "./types"

export const AuthenticationScreen = ({
  navigation,
  route,
}: Props) => {
  const { setPersonalData } = useUserStore()

  const [isLoading, setIsLoading] = useState(false)

  const phoneNumber = route.params?.phoneNumber + ''

  const onSubmit = async (inputToken: string) => {
    if (isLoading) return

    setIsLoading(true)
    const response = await login(phoneNumber, inputToken)
    setIsLoading(false)

    if (response.error || !response.data?.token) {
      const error = '' + response.error

      if (error.includes('403')) {
        Toast.show({
          type: 'info',
          text1: 'Info',
          text2: 'Seu token de acesso expirou, gerando um novo...'
        })

        setTimeout(() => {
          onResendCode()
        }, 700)
      } else {
        Toast.show({
          type: 'error',
          text1: 'Alerta',
          text2: 'Token inserido está incorreto'
        })
      }

      return
    }

    if (response.data.id) {
      // Login
      setPersonalData(response.data)
      navigation.navigate(LOGGED_NAVIGATOR)
    } else {
      // Sign Up
      setPersonalData({ token: response.data.token })
      navigation.navigate(TERMS_SCREEN, { phoneNumber })
    }
  }

  const onResendCode = async () => {
    if (isLoading) return

    setIsLoading(true)
    const response = await requestLogin(phoneNumber)
    setIsLoading(false)

    if (response.error) {
      Toast.show({
        type: 'error',
        text1: 'Alerta',
        text2: 'Algo deu errado...'
      })
    } else {
      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: 'Token reenviado com sucesso'
      })
    }
  }

  return (
    <ScreenWrapper scroll >
      <ContentWrapper>
        <AppNameImage
          source={images.yellowAppName.path}
          resizeMode="contain"
        />
        <SubTitle>{promoteFun}</SubTitle>
        <AppImage
          source={images.image2.path}
          resizeMode="contain"
        />
        <FormContainer>
          <AuthCodeForm
            onSubmit={onSubmit}
            onResendCode={onResendCode}
          />
        </FormContainer>
      </ContentWrapper>
    </ScreenWrapper>
  )
}