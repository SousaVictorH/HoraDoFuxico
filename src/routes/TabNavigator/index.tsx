import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { TabBar } from "components/tabBar"

import {
  NOTIFICATIONS_SCREEN,
  HELP_SCREEN,
  STACK_NAVIGATOR
} from "constants/screens"

import { defaultScreenOptions } from "routes/options"
import { RootStackParamList } from "routes/types"

import { StackNavigator } from "routes/StackNavigator"

import { NotificationsScreen } from "screens/Logged/Notifications"
import { HelpScreen } from "screens/Logged/Help"

const Tab = createBottomTabNavigator<RootStackParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={STACK_NAVIGATOR}
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
        name={STACK_NAVIGATOR}
        component={StackNavigator}
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
