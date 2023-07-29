import { createStackNavigator } from '@react-navigation/stack'

import {
  TAB_NAVIGATOR,
  EDIT_PROFILE_SCREEN,
  NEW_SCHEDULE_SCREEN,
  HELP_SCREEN,
  NOTIFICATIONS_SCREEN,
  PROFILE_SCREEN,
  SCHEDULE_SCREEN
} from 'constants/screens'

import { EditProfileScreen } from "screens/Logged/EditProfile"
import { NewScheduleScreen } from "screens/Logged/NewSchedule"
import { HelpScreen } from "screens/Logged/Help"
import { NotificationsScreen } from 'screens/Logged/Notifications'
import { ProfileScreen } from 'screens/Logged/Profile'
import { ScheduleScreen } from 'screens/Logged/Schedule'

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
        name={EDIT_PROFILE_SCREEN}
        component={EditProfileScreen}
      />
      <Stack.Screen
        name={NEW_SCHEDULE_SCREEN}
        component={NewScheduleScreen}
      />
      <Stack.Screen
        name={HELP_SCREEN}
        component={HelpScreen}
      />
      <Stack.Screen
        name={NOTIFICATIONS_SCREEN}
        component={NotificationsScreen}
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
