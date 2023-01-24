import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  WELCOME_SCREEN,
  AUTHENTICATION_SCREEN,
  TERMS_SCREEN,
  SIGN_UP_SCREEN,
  TAB_NAVIGATOR
} from 'constants/screens'

import { TabNavigator } from './TabNavigator'

// Unlogged
import { WelcomeScreen } from 'screens/Unlogged/Welcome'
import { AuthenticationScreen } from 'screens/Unlogged/Authentication'
import { TermsScreen } from 'screens/Unlogged/Terms'
import { SignUpScreen } from 'screens/Unlogged/SignUp'

import { RootStackParamList } from './types'
import { defaultScreenOptions } from './options'

const Stack = createStackNavigator<RootStackParamList>();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={WELCOME_SCREEN}
      >
        <Stack.Screen
          name={WELCOME_SCREEN}
          component={WelcomeScreen}
          options={defaultScreenOptions}
        />
        <Stack.Screen
          name={AUTHENTICATION_SCREEN}
          component={AuthenticationScreen}
          options={defaultScreenOptions}
        />
        <Stack.Screen
          name={TERMS_SCREEN}
          component={TermsScreen}
          options={defaultScreenOptions}
        />
        <Stack.Screen
          name={SIGN_UP_SCREEN}
          component={SignUpScreen}
          options={defaultScreenOptions}
        />
        <Stack.Screen
          name={TAB_NAVIGATOR}
          component={TabNavigator}
          options={defaultScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
