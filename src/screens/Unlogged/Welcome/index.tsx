import { useState, useRef, useEffect } from "react"
import AnimatedLottieView from "lottie-react-native"
import Toast from "react-native-toast-message"

import { requestLogin } from "interfaces/api"

import { ScreenWrapper } from 'templates/ScreenWrapper'
import { SignInForm } from 'components/forms/SignIn'

import { animations } from "resources/animations"
import { images } from "resources/images"

import { promoteGoodMoments } from "constants/texts"
import { AUTHENTICATION_SCREEN } from "constants/screens"

import {
  AnimatedView,
  ContentWrapper,
  AppNameImage,
  SubTitle,
  AppImage,
  FormContainer
} from "./styles"
import { Props, OnSignInProps, OnSocialSignInProps } from "./types"

export const WelcomeScreen = ({
  navigation
}: Props) => {
  const [animationFinished, setAnimationFinished] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const animationRef = useRef<any>(null)

  useEffect(() => {
    setTimeout(() => animationRef.current?.play(), 100);

    return () => {
      animationRef.current?.reset();
    }
  }, []);

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
    const response = await requestLogin(phone)
    setIsLoading(false)

    if (response.error) {
      return Toast.show({
        type: 'error',
        text1: 'Alerta',
        text2: 'Algo deu errado...'
      })
    } else {
      navigation.navigate(AUTHENTICATION_SCREEN, {
        phoneNumber: phone
      })
    }
  }

  const onSocialSignIn = ({ google, facebook }: OnSocialSignInProps) => {
    if (google) console.log('login with google')
    else if (facebook) console.log('login with facebook')
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
              <AppImage
                source={images.image1.path}
                resizeMode="contain"
              />
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
            source={animations.welcomeAnimation.path}
            onAnimationFinish={() => setAnimationFinished(true)}
            loop={false}
            autoPlay={false}
          />
        )
      }
    </ScreenWrapper>
  )
}
