/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'

import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import * as Facebook from 'expo-auth-session/providers/facebook'

import AnimatedLottieView from 'lottie-react-native'
import Toast from 'react-native-toast-message'

import { UserService, FacebookService, GoogleService  } from 'services'

import { useUserStore } from 'store/user'
import { useUserSchedulesStore } from 'store/userSchedules'

import { ScreenWrapper } from 'templates/ScreenWrapper'
import { SignInForm } from 'components/forms/SignIn'

import { animations } from 'resources/animations'
import { images } from 'resources/images'

import { googleAuthConfig, facebookAuthConfig } from 'resources/configs'

import { promoteGoodMoments } from 'constants/texts'
import { AUTHENTICATION_SCREEN, LOGGED_NAVIGATOR, SIGN_UP_SCREEN } from 'constants/screens'

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
  const { id, token, setPersonalData } = useUserStore()
  const { setSchedules } = useUserSchedulesStore()

  const [, googleResponse, googlePromptAsync] = Google.useAuthRequest(googleAuthConfig)
  const [, facebookResponse, facebookPromptAsync] = Facebook.useAuthRequest(facebookAuthConfig)

  const [withGoogle, setWithGoogle] = useState(true)

  const [animationFinished, setAnimationFinished] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const animationRef = useRef<any>(null)

  useEffect(() => {
    setTimeout(() => animationRef.current?.play(), 100)

    // Clear state
    setSchedules([])

    return () => {
      animationRef.current?.reset()
    }
  }, [])

  useEffect(() => {
    if (googleResponse?.type === 'success' && googleResponse.authentication?.accessToken) {
      handleSocialSignIn(googleResponse.authentication.accessToken)
    }
  }, [googleResponse])

  useEffect(() => {
    if (facebookResponse?.type === 'success' && facebookResponse.authentication?.accessToken) {
      handleSocialSignIn(facebookResponse.authentication.accessToken)
    }
  }, [facebookResponse])

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

  const onSocialSignIn = ({ google, facebook }: OnSocialSignInProps) => {
    if (google) {
      setWithGoogle(true)
      googlePromptAsync()
    }
    else if (facebook) {
      setWithGoogle(false)
      facebookPromptAsync()
    }
  }

  const handleSocialSignIn = async (token: string) => {
    if (isLoading) return

    setIsLoading(true)
    const response = withGoogle ? (
      await GoogleService.loadUser(token)
    ) : (
      await FacebookService.loadUser(token)
    )

    if (response.status === 200) {
      const {
        id,
        name,
        first_name,
        picture
      } = await response.json()

      const avatar = typeof picture === 'object' ?
        (picture.data?.is_silhouette ? null : picture?.data.url) :
        picture

      UserService.socialLogin(id, name || first_name, avatar)
        .then(res => {
          setPersonalData({ token: res.data.token })

          if (res.data.id) {
            setPersonalData(res.data)
            navigation.navigate(LOGGED_NAVIGATOR)
          } else {
            const {
              socialId,
              name,
              avatar
            } = res.data

            navigation.navigate(SIGN_UP_SCREEN, {
              socialId,
              name,
              avatar
            })
          }
        })
        .catch(() => {
          Toast.show({
            type: 'error',
            text1: 'Alerta',
            text2: 'Algo deu errado...'
          })
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      setIsLoading(false)

      Toast.show({
        type: 'error',
        text1: 'Alerta',
        text2: 'Algo deu errado...'
      })
    }
  }

  const onAnimationFinished = async () => {
    setAnimationFinished(true)

    if (id && token) {
      setIsLoading(true)

      UserService.verifyToken(id)
        .then((response: any) => {
          setPersonalData(response.data)
          navigation.navigate(LOGGED_NAVIGATOR)
        })
        .catch(() => {})
        .finally(() => {
          setIsLoading(false)
        })
    }
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
            onAnimationFinish={onAnimationFinished}
            loop={false}
            autoPlay={false}
          />
        )
      }
    </ScreenWrapper>
  )
}
