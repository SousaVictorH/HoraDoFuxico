import React, { useState } from 'react'

import Toast from 'react-native-toast-message'

import { requestLogin, login } from 'interfaces/api'

import { ScreenWrapper } from 'templates/ScreenWrapper'
import { AuthCodeForm } from 'components/forms/AuthCode'

import { useUserStore } from 'store/user'

import { promoteFun } from 'constants/texts'
import { TERMS_SCREEN } from 'constants/screens'

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
  navigation
}: Props) => {
  const { phoneNumber } = useUserStore()

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (inputToken: string) => {
    if (isLoading) return

    setIsLoading(true)
    const response = await login(phoneNumber, inputToken)
    setIsLoading(false)

    if (response.error) {
      Toast.show({
        type: 'error',
        text1: 'Alerta',
        text2: 'Token inserido está incorreto'
      })
    } else {
      navigation.navigate(TERMS_SCREEN)
    }
  }

  const onResendCode = () => {
    if (isLoading) return

    // resend token
    Toast.show({
      type: 'error',
      text1: 'Alerta',
      text2: 'Algo deu errado'
    })
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