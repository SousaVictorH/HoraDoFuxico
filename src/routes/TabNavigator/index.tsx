import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { TabBar } from "components/tabBar"

import {
  NOTIFICATIONS_SCREEN,
  HOME_SCREEN,
  HELP_SCREEN
} from "constants/screens"

import { defaultScreenOptions } from "routes/options"
import { RootStackParamList } from "routes/types"

import { HomeScreen } from "screens/Logged/Home"
import { NotificationsScreen } from "screens/Logged/Notifications"
import { HelpScreen } from "screens/Logged/Help"

const Tab = createBottomTabNavigator<RootStackParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={HOME_SCREEN}
      tabBar={({ descriptors, navigation, state }) => (
        <TabBar
          descriptors={descriptors}
          navigation={navigation}
          state={state}
        />
      )}
    >
      <Tab.Screen
        name={NOTIFICATIONS_SCREEN}
        component={NotificationsScreen}
        options={defaultScreenOptions}
      />
      <Tab.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={defaultScreenOptions}
      />
      <Tab.Screen
        name={HELP_SCREEN}
        component={HelpScreen}
        options={defaultScreenOptions}
      />
    </Tab.Navigator>
  )
}
