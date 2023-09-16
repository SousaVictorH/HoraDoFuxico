import React, { useState, useRef, useEffect } from 'react'

import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
// import * as Facebook from 'expo-auth-session/providers/facebook'

import AnimatedLottieView from 'lottie-react-native'
import Toast from 'react-native-toast-message'

import { UserService } from 'services/UserService'

import { ScreenWrapper } from 'templates/ScreenWrapper'
import { SignInForm } from 'components/forms/SignIn'

import { animations } from 'resources/animations'
import { images } from 'resources/images'

import { googleAuthConfig } from 'resources/configs/googleAuth'

import { promoteGoodMoments } from 'constants/texts'
import { AUTHENTICATION_SCREEN } from 'constants/screens'

import {
  AnimatedView,
  ContentWrapper,
  AppNameImage,
  SubTitle,
  AppImageContainer,
  AppImage,
  FormContainer
} from './styles'
import { Props, OnSignInProps, OnSocialSignInProps } from './types'

WebBrowser.maybeCompleteAuthSession()

export const LandingScreen = ({
  navigation
}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [request, response, promptAsync] = Google.useAuthRequest(googleAuthConfig)

  const [animationFinished, setAnimationFinished] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const animationRef = useRef<any>(null)

  useEffect(() => {
    setTimeout(() => animationRef.current?.play(), 100)

    return () => {
      animationRef.current?.reset()
    }
  }, [])

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.accessToken) {
      handleSignInWithGoogle(response.authentication.accessToken)
    }
  }, [response])

  const onSignIn = async ({ areaCode, phoneNumber }: OnSignInProps) => {
    if (isLoading) return

    const phone = (areaCode + phoneNumber).replace('-', '')

    if (phone.length !== 11) {
      return Toast.show({
        type: 'error',
        text1: 'Alerta',
        text2: 'Verifique seu número de celular'
      })
    }

    setIsLoading(true)

    UserService.requestLogin(phone)
      .then(() => {
        navigation.navigate(AUTHENTICATION_SCREEN, {
          phoneNumber: phone
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

  const onSocialSignIn = async ({ google, facebook }: OnSocialSignInProps) => {
    if (google) {
      await promptAsync()
    }
    else if (facebook) {
      console.log('facebook sign in')
    }
  }

  const handleSignInWithGoogle = async (token: string) => {
    if (isLoading) return
    setIsLoading(true)

    const userData = await fetch(
      'https://www.googleapis.com/userinfo/v2/me',
      { headers: { Authorization: `Bearer ${token}`}}
    )

    const status = userData.status

    if (status === 200) {
      const user = await userData.json()

      console.log(user)
    } else {
      return Toast.show({
        type: 'error',
        text1: 'Alerta',
        text2: 'Algo deu errado...'
      })
    }

    setIsLoading(false)
  }

  return (
    <ScreenWrapper scroll>
      {
        animationFinished ? (
          <AnimatedView>
            <ContentWrapper>
              <AppNameImage
                source={images.blueAppName.path}
                resizeMode="contain"
              />
              <SubTitle>{promoteGoodMoments}</SubTitle>
              <AppImageContainer>
                <AppImage
                  source={images.image1.path}
                  resizeMode="contain"
                />
              </AppImageContainer>
              <FormContainer>
                <SignInForm
                  onSignIn={onSignIn}
                  onSocialSignIn={onSocialSignIn}
                  isLoading={isLoading}
                />
              </FormContainer>
            </ContentWrapper>
          </AnimatedView>
        ) : (
          <AnimatedLottieView
            ref={animationRef}
            source={animations.landingAnimation.path}
            onAnimationFinish={() => setAnimationFinished(true)}
            loop={false}
            autoPlay={false}
          />
        )
      }
    </ScreenWrapper>
  )
}
