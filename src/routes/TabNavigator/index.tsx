import React, { useState } from "react"

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
import { SidePanel } from "components/sidePanel"

const Tab = createBottomTabNavigator<RootStackParamList>();

export const TabNavigator = () => {
  const [showSidePanel, setShowSidePanel] = useState(false)

  const toggleSidePanel = () => {
    setShowSidePanel(!showSidePanel)
  }

  return (
    <Tab.Navigator
      initialRouteName={STACK_NAVIGATOR}
      tabBar={({ descriptors, navigation, state }) => (
        <>
          <SidePanel
            showSidePanel={showSidePanel}
            toggleSidePanel={toggleSidePanel}
            navigation={navigation}
          />
          <TabBar
            descriptors={descriptors}
            navigation={navigation}
            state={state}
          />
        </>
      )}
      screenOptions={defaultScreenOptions}
    >
      <Tab.Screen
        name={NOTIFICATIONS_SCREEN}
        children={({ route, navigation }) => (
          <NotificationsScreen
            route={route}
            navigation={navigation}
            toggleSidePanel={toggleSidePanel}
          />
        )}
      />
      <Tab.Screen
        name={STACK_NAVIGATOR}
        children={() => <StackNavigator toggleSidePanel={toggleSidePanel} />}
      />
      <Tab.Screen
        name={HELP_SCREEN}
        children={({ route, navigation }) => (
          <HelpScreen
            route={route}
            navigation={navigation}
            toggleSidePanel={toggleSidePanel}
          />
        )}
      />
    </Tab.Navigator>
  )
}
