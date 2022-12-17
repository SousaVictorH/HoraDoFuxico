import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { WELCOME_SCREEN, AUTHENTICATION_SCREEN } from '../constants/screens'

import { WelcomeScreen } from '../screens/Unlogged/Welcome'
import { AuthenticationScreen } from '../screens/Unlogged/Authentication'

import { RootStackParamList } from './types'
import { defaultScreenSettings } from './settings'

const Stack = createStackNavigator<RootStackParamList>();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={WELCOME_SCREEN} >
        <Stack.Screen
          name={WELCOME_SCREEN}
          component={WelcomeScreen}
          options={defaultScreenSettings}
        />
        <Stack.Screen
          name={AUTHENTICATION_SCREEN}
          component={AuthenticationScreen}
          options={defaultScreenSettings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
