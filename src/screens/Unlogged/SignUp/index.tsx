import React, { useState } from "react"
import Toast from 'react-native-toast-message'

import { useUserStore } from "store/user"

import { ScreenWrapper } from 'templates/ScreenWrapper'
import { SignUpForm } from 'components/forms/SignUp'

import { signUp } from "interfaces/api"

import { images } from 'resources/images'
import { LOGGED_NAVIGATOR } from "constants/screens"

import {
  ContentWrapper,
  ImageWrapper,
  Image,
  FormContainer
} from './styles'
import { handleSubmitProps, Props } from "./types"

export const SignUpScreen = ({
  navigation,
  route
}: Props) => {
  const { setPersonalData } = useUserStore()

  const [isLoading, setIsLoading] = useState(false)

  const { phoneNumber } = route.params

  const handleSubmit = async ({
    name,
    birthDate,
    photo
  }: handleSubmitProps) => {
    if (isLoading) return

    setIsLoading(true)
    const response = await signUp(name, birthDate, phoneNumber, photo)
    setIsLoading(false)

    if (response.error) {
      return Toast.show({
        type: 'error',
        text1: 'Alerta',
        text2: 'Algo deu errado...'
      })
    } else {
      setPersonalData(response.data)
      navigation.navigate(LOGGED_NAVIGATOR)
    }
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
            onSignUp={handleSubmit}
          />
        </FormContainer>
      </ContentWrapper>
    </ScreenWrapper>
  )
}