import React, { useState } from 'react'
import Toast from 'react-native-toast-message'

import { AxiosError, AxiosResponse } from 'axios'
import { UserService } from 'services/UserService'

import { useUserStore } from 'store/user'

import { ScreenWrapper } from 'templates/ScreenWrapper'
import { AuthCodeForm } from 'components/forms/AuthCode'

import { promoteFun } from 'constants/texts'
import { LOGGED_NAVIGATOR, TERMS_SCREEN } from 'constants/screens'

import { images } from 'resources/images'

import {
  ContentWrapper,
  AppNameImage,
  SubTitle,
  AppImageContainer,
  AppImage,
  FormContainer
} from './styles'
import { Props } from './types'

export const AuthenticationScreen = ({
  navigation,
  route,
}: Props) => {
  const { setPersonalData } = useUserStore()

  const [isLoading, setIsLoading] = useState(false)

  const { phoneNumber } = route.params

  const onSubmit = async (inputToken: string) => {
    if (isLoading) return false

    let shouldAnimateShake = false
    setIsLoading(true)

    UserService.login(phoneNumber, inputToken)
      .then((response: AxiosResponse) => {
        if (response.data.id) {
          // Login
          setPersonalData(response.data)
          navigation.navigate(LOGGED_NAVIGATOR)
        } else {
          // Sign Up
          setPersonalData({ token: response.data.token })
          navigation.navigate(TERMS_SCREEN, { phoneNumber })
        }
      })
      .catch((err: AxiosError) => {
        const status = err.response?.status || '403'

        if (status === 403) {
          // Expired token
          Toast.show({
            type: 'info',
            text1: 'Info',
            text2: 'Seu token de acesso expirou, gerando um novo...'
          })

          setTimeout(() => {
            onResendCode()
          }, 750)
        } else {
          Toast.show({
            type: 'error',
            text1: 'Alerta',
            text2: 'Token inserido está incorreto'
          })

          shouldAnimateShake = true
        }
      })
      .finally(() => setIsLoading(false))

    return shouldAnimateShake
  }

  const onResendCode = async () => {
    if (isLoading) return

    setIsLoading(true)

    UserService.requestLogin(phoneNumber)
      .then(() => {
        Toast.show({
          type: 'success',
          text1: 'Sucesso',
          text2: 'Token reenviado com sucesso'
        })
      })
      .catch(() => {
        Toast.show({
          type: 'error',
          text1: 'Alerta',
          text2: 'Algo deu errado...'
        })
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <ScreenWrapper scroll >
      <ContentWrapper>
        <AppNameImage
          source={images.yellowAppName.path}
          resizeMode="contain"
        />
        <SubTitle>{promoteFun}</SubTitle>
        <AppImageContainer>
          <AppImage
            source={images.image2.path}
            resizeMode="contain"
          />
        </AppImageContainer>
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
