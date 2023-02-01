import { useEffect, useRef, useState } from 'react'
import { Alert } from 'react-native'

import * as Notifications from 'expo-notifications'

import { ScreenWrapper } from 'templates/ScreenWrapper'
import { AuthCodeForm } from 'components/forms/AuthCode'

import { promoteFun } from 'constants/texts'
import { TERMS_SCREEN } from 'constants/screens'

import { images } from 'resources/images'

import { schedulePushNotification } from "utils/notifications"

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
  const [token, setToken] = useState('')

  const onSubmit = (inpuToken: string) => {
    if (inpuToken === token) {
      navigation.navigate(TERMS_SCREEN)
    } else {
      Alert.alert('Alerta', 'Token incorreto')
    }
  }

  const generateNewToken = () => {
    const newToken = (Math.floor(Math.random() * 1000000) + 1000000).toString().substring(1);

    setToken(newToken)

    sendToken(newToken)
  }

  const sendToken = (newToken: string) => {
    schedulePushNotification(`Seu token de acesso é ${newToken}`)
  }

  useEffect(() => {
    generateNewToken()
  }, [])

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
            onResendCode={generateNewToken}
          />
        </FormContainer>
      </ContentWrapper>
    </ScreenWrapper>
  )
}