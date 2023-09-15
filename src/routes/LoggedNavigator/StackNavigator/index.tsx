import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import {
  TAB_NAVIGATOR,
  NEW_SCHEDULE_SCREEN,
  PROFILE_SCREEN,
  SCHEDULE_SCREEN
} from 'constants/screens'

import { NewScheduleScreen } from 'screens/Logged/NewSchedule'
import { ProfileScreen } from 'screens/Logged/Profile'
import { ScheduleScreen } from 'screens/Logged/Schedule'

import { TabNavigator } from 'routes/LoggedNavigator/TabNavigator'

import { RootParamList } from 'routes/types'
import { loggedScreenOptions } from 'routes/LoggedNavigator/options'

const Stack = createStackNavigator<RootParamList>()

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={TAB_NAVIGATOR}
      screenOptions={loggedScreenOptions}
    >
      <Stack.Screen
        name={TAB_NAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen
        name={NEW_SCHEDULE_SCREEN}
        component={NewScheduleScreen}
      />
      <Stack.Screen
        name={PROFILE_SCREEN}
        component={ProfileScreen}
      />
      <Stack.Screen
        name={SCHEDULE_SCREEN}
        component={ScheduleScreen}
      />
    </Stack.Navigator>
  )
}
