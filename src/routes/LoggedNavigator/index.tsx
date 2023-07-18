import { createStackNavigator } from '@react-navigation/stack'

import {
  TAB_NAVIGATOR,
  PROFILE_SCREEN
} from 'constants/screens'

import { ProfileScreen } from "screens/Logged/Profile"
import { TabNavigator } from 'routes/TabNavigator'

import { RootStackParamList } from '../types'
import { defaultScreenOptions } from '../options'

const Stack = createStackNavigator<RootStackParamList>();

export const LoggedNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={TAB_NAVIGATOR}
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name={TAB_NAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen
        name={PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  )
}
