import { useState, useRef, useEffect } from "react"
import { Animated, Easing } from "react-native"

import AnimatedLottieView from "lottie-react-native"

import { ScreenWrapper } from 'templates/ScreenWrapper'
import { SignInForm } from 'components/forms/SignIn'

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
  const [viewAnimation] = useState(new Animated.Value(0))
  const [opacityAnimation] = useState(new Animated.Value(0))

  const [animationFinished, setAnimationFinished] = useState(false)

  const animationRef = useRef<any>(null)

  const onFinish = () => {
    setAnimationFinished(true)

    // Start animations
    Animated.parallel([
      Animated.spring(viewAnimation, {
        toValue: 85,
        useNativeDriver: true
      }),
      Animated.timing(opacityAnimation, {
        toValue: 1,
        easing: Easing.cubic,
        duration: 200,
        useNativeDriver: true
      })
    ]).start()
  }

  useEffect(() => {
    setTimeout(() => animationRef.current?.play(), 100);

    return () => {
      animationRef.current?.reset();
    }
  }, []);

  const transform = {
    transform: [
      { translateY: viewAnimation }
    ],
    opacity: opacityAnimation
  }

  const onSignIn = ({ areaCode, phoneNumber }: OnSignInProps) => {
    console.log(areaCode, phoneNumber)

    navigation.navigate(AUTHENTICATION_SCREEN)
  }

  const onSocialSignIn = ({ google, facebook }: OnSocialSignInProps) => {
    if (google) console.log('login with google')
    else if (facebook) console.log('login with facebook')
  }

  return (
    <ScreenWrapper scroll>
      {
        animationFinished ? (
          <AnimatedView style={transform}>
            <ContentWrapper>
              <AppNameImage
                source={require('../../../../assets/images/BlueAppName.png')}
                resizeMode="contain"
              />
              <SubTitle>{promoteGoodMoments}</SubTitle>
              <AppImage
                source={require('../../../../assets/images/Image1.png')}
                resizeMode="contain"
              />
              <FormContainer>
                <SignInForm
                  onSignIn={onSignIn}
                  onSocialSignIn={onSocialSignIn}
                />
              </FormContainer>
            </ContentWrapper>
          </AnimatedView>
        ) : (
          <AnimatedLottieView
            ref={animationRef}
            source={require('../../../../assets/animations/WelcomeAnimation.json')}
            onAnimationFinish={onFinish}
            loop={false}
            autoPlay={false}
          />
        )
      }
    </ScreenWrapper>
  )
}
