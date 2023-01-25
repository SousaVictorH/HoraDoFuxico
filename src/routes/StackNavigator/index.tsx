import { createStackNavigator } from '@react-navigation/stack'

import {
  HOME_SCREEN,
  NEW_SCHEDULE_SCREEN
} from 'constants/screens'

import { HomeScreen } from "screens/Logged/Home"
import { NewScheduleScreen } from "screens/Logged/NewSchedule"

import { RootStackParamList } from '../types'
import { defaultScreenOptions } from '../options'

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={HOME_SCREEN}
    >
      <Stack.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={defaultScreenOptions}
      />
      <Stack.Screen
        name={NEW_SCHEDULE_SCREEN}
        component={NewScheduleScreen}
        options={defaultScreenOptions}
      />
    </Stack.Navigator>
  )
}
