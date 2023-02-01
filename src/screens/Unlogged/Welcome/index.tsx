import { useState, useRef, useEffect } from "react"
import { Alert, Animated, Easing } from "react-native"
import AnimatedLottieView from "lottie-react-native"

import * as Notifications from 'expo-notifications'

import { useStore } from "store"
import Theme from "styles/theme"

import { ScreenWrapper } from 'templates/ScreenWrapper'
import { SignInForm } from 'components/forms/SignIn'

import { animations } from "resources/animations"
import { images } from "resources/images"

import { promoteGoodMoments } from "constants/texts"
import { AUTHENTICATION_SCREEN } from "constants/screens"

import { registerForPushNotificationsAsync } from "utils/notifications"

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
  // Notifications
  const [expoPushToken, setExpoPushToken] = useState('')
  const [notification, setNotification] = useState(false)

  const notificationListener = useRef<any>()
  const responseListener = useRef<any>()

  const { setPhoneNumber } = useStore()

  const [viewAnimation] = useState(new Animated.Value(0))
  const [opacityAnimation] = useState(new Animated.Value(0))

  const [animationFinished, setAnimationFinished] = useState(false)

  const animationRef = useRef<any>(null)

  const onFinish = () => {
    setAnimationFinished(true)

    // Start animations
    Animated.parallel([
      Animated.spring(viewAnimation, {
        toValue: Number(Theme.spacings.paddingTop.replace('px', '')),
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


  useEffect(() => {
    registerForPushNotificationsAsync().then(providedToken => setExpoPushToken(providedToken || ''));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification ? true : false);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const transform = {
    transform: [
      { translateY: viewAnimation }
    ],
    opacity: opacityAnimation
  }

  const onSignIn = ({ areaCode, phoneNumber }: OnSignInProps) => {
    const phone = `(${areaCode}) ${phoneNumber}`

    if (phone.length !== 15) {
      Alert.alert('Alerta', 'Verifique seu número de celular')
    } else {
      setPhoneNumber(phoneNumber)

      navigation.navigate(AUTHENTICATION_SCREEN)
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
          <AnimatedView style={transform}>
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
                />
              </FormContainer>
            </ContentWrapper>
          </AnimatedView>
        ) : (
          <AnimatedLottieView
            ref={animationRef}
            source={animations.welcomeAnimation.path}
            onAnimationFinish={onFinish}
            loop={false}
            autoPlay={false}
          />
        )
      }
    </ScreenWrapper>
  )
}
