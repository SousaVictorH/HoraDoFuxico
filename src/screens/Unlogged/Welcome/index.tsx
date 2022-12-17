import { useState, useRef, useEffect } from "react"
import { Animated, Easing } from "react-native"

import AnimatedLottieView from "lottie-react-native"

import { ScreenWrapper } from '../../../templates/ScreenWrapper'
import { SignInForm } from '../../../components/forms/SignIn'

import { promoteGoodMoments } from "../../../constants/texts"

import {
  AnimatedView,
  ContentWrapper,
  AppNameImage,
  SubTitle,
  AppImage,
  FormWrapper
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
        duration: 300,
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
    console.log('areaCode = ', areaCode)
    console.log('phoneNumber = ', phoneNumber)
  }

  const onSocialSignIn = ({ google, facebook }: OnSocialSignInProps) => {
    console.log('google = ', google)
    console.log('facebook = ', facebook)
  }

  return (
    <ScreenWrapper scroll>
      {
        animationFinished ? (
          <AnimatedView style={transform}>
            <ContentWrapper>
              <AppNameImage
                source={require('../../../../images/BlueAppName.png')}
                resizeMode="contain"
              />
              <SubTitle>{promoteGoodMoments}</SubTitle>
              <AppImage
                source={require('../../../../images/Image1.png')}
                resizeMode="contain"
              />
              <FormWrapper>
                <SignInForm
                  onSignIn={onSignIn}
                  onSocialSignIn={onSocialSignIn}
                />
              </FormWrapper>
            </ContentWrapper>
          </AnimatedView>
        ) : (
          <AnimatedLottieView
            ref={animationRef}
            source={require('../../../../animations/WelcomeAnimation.json')}
            onAnimationFinish={onFinish}
            loop={false}
            autoPlay={false}
          />
        )
      }
    </ScreenWrapper>
  )
}
