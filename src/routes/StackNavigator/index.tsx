import { createStackNavigator } from '@react-navigation/stack'

import {
  HOME_SCREEN,
  NEW_SCHEDULE_SCREEN,
  HELP_SCREEN,
} from 'constants/screens'

import { HomeScreen } from "screens/Logged/Home"
import { NewScheduleScreen } from "screens/Logged/NewSchedule"
import { HelpScreen } from "screens/Logged/Help"

import { RootStackParamList } from '../types'
import { defaultScreenOptions } from '../options'

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = ({
  toggleSidePanel
}: { toggleSidePanel: () => void }) => {
  return (
    <Stack.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name={HOME_SCREEN}
        children={({ route, navigation }) => (
          <HomeScreen
            route={route}
            navigation={navigation}
            toggleSidePanel={toggleSidePanel}
          />
        )}
      />
      <Stack.Screen
        name={NEW_SCHEDULE_SCREEN}
        children={({ route, navigation }) => (
          <NewScheduleScreen
            route={route}
            navigation={navigation}
            toggleSidePanel={toggleSidePanel}
          />
        )}
      />
      <Stack.Screen
        name={HELP_SCREEN}
        children={({ route, navigation }) => (
          <HelpScreen
            route={route}
            navigation={navigation}
            toggleSidePanel={toggleSidePanel}
          />
        )}
      />
    </Stack.Navigator>
  )
}
