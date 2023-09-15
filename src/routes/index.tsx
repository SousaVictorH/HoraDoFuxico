import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  LANDING_SCREEN,
  AUTHENTICATION_SCREEN,
  TERMS_SCREEN,
  SIGN_UP_SCREEN,
  LOGGED_NAVIGATOR
} from 'constants/screens'

import LoggedNavigator from './LoggedNavigator'

// Unlogged
import { LandingScreen } from 'screens/Unlogged/Landing'
import { AuthenticationScreen } from 'screens/Unlogged/Authentication'
import { TermsScreen } from 'screens/Unlogged/Terms'
import { SignUpScreen } from 'screens/Unlogged/SignUp'

import { navigationRef } from './RootNavigation'

import { RootParamList } from './types'
import { defaultScreenOptions } from './options'

const Stack = createStackNavigator<RootParamList>()

export const Router = () => {
  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator
        initialRouteName={LANDING_SCREEN}
        screenOptions={defaultScreenOptions}
      >
        <Stack.Screen
          name={LANDING_SCREEN}
          component={LandingScreen}
        />
        <Stack.Screen
          name={AUTHENTICATION_SCREEN}
          component={AuthenticationScreen}
        />
        <Stack.Screen
          name={TERMS_SCREEN}
          component={TermsScreen}
        />
        <Stack.Screen
          name={SIGN_UP_SCREEN}
          component={SignUpScreen}
        />
        <Stack.Screen
          name={LOGGED_NAVIGATOR}
          component={LoggedNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
