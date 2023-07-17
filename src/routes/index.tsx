import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  WELCOME_SCREEN,
  AUTHENTICATION_SCREEN,
  TERMS_SCREEN,
  SIGN_UP_SCREEN,
  LOGGED_NAVIGATOR
} from 'constants/screens'

import { LoggedNavigator } from './LoggedNavigator'

// Unlogged
import { WelcomeScreen } from 'screens/Unlogged/Welcome'
import { AuthenticationScreen } from 'screens/Unlogged/Authentication'
import { TermsScreen } from 'screens/Unlogged/Terms'
import { SignUpScreen } from 'screens/Unlogged/SignUp'

import { navigationRef } from './RootNavigation';

import { RootStackParamList } from './types'
import { defaultScreenOptions } from './options'

const Stack = createStackNavigator<RootStackParamList>();

export const Router = () => {
  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator
        initialRouteName={WELCOME_SCREEN}
        screenOptions={defaultScreenOptions}
      >
        <Stack.Screen
          name={WELCOME_SCREEN}
          component={WelcomeScreen}
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
