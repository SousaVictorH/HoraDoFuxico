import React, { useState } from 'react'
import Toast from 'react-native-toast-message'

import { AxiosResponse } from 'axios'
import { UserService } from 'services/UserService'

import { useUserStore } from 'store/user'

import { ScreenWrapper } from 'templates/ScreenWrapper'
import { SignUpForm } from 'components/forms/SignUp'

import { images } from 'resources/images'
import { LOGGED_NAVIGATOR } from 'constants/screens'

import {
  ContentWrapper,
  ImageWrapper,
  Image,
  FormContainer
} from './styles'
import { handleSubmitProps, Props } from './types'

export const SignUpScreen = ({
  navigation,
  route
}: Props) => {
  const { setPersonalData } = useUserStore()

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async ({
    name,
    birthDate,
    phoneNumber,
    photo
  }: handleSubmitProps) => {
    if (isLoading) return
    setIsLoading(true)

    UserService.signUp(name, birthDate, phoneNumber, photo, route.params.socialId)
      .then((response: AxiosResponse) => {
        setPersonalData(response.data)
        navigation.navigate(LOGGED_NAVIGATOR)
      })
      .catch(() => {
        Toast.show({
          type: 'error',
          text1: 'Alerta',
          text2: 'Algo ao fazer cadastro'
        })
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <ScreenWrapper scroll>
      <ContentWrapper>
        <ImageWrapper>
          <Image
            source={images.appName.path}
            resizeMode="contain"
          />
        </ImageWrapper>
        <FormContainer>
          <SignUpForm
            initialName={route.params.name}
            initialPhoneNumber={route.params.phoneNumber}
            initialPhoto={route.params.avatar}
            showPhoneInput={route.params.socialId ? true : false}
            onSignUp={handleSubmit}
          />
        </FormContainer>
      </ContentWrapper>
    </ScreenWrapper>
  )
}
