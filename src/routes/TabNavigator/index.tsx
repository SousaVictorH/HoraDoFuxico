import React, { useState } from "react"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { TabBar } from "components/tabBar"

import {
  HOME_SCREEN,
  PROFILE_SCREEN,
  SEARCH_SCREEN
} from "constants/screens"

import { defaultScreenOptions } from "routes/options"
import { RootStackParamList } from "routes/types"

import { ProfileScreen } from "screens/Logged/Profile"
import { HomeScreen } from "screens/Logged/Home"

import { SidePanel } from "components/sidePanel"
import { SearchScreen } from "screens/Logged/Search"

const Tab = createBottomTabNavigator<RootStackParamList>();

export const TabNavigator = () => {
  const [showSidePanel, setShowSidePanel] = useState(false)

  const toggleSidePanel = () => {
    setShowSidePanel(!showSidePanel)
  }

  return (
    <Tab.Navigator
      initialRouteName={HOME_SCREEN}
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
        name={SEARCH_SCREEN}
        children={({ route, navigation }) => (
          <SearchScreen
            route={route}
            navigation={navigation}
            toggleSidePanel={toggleSidePanel}
          />
        )}
      />
      <Tab.Screen
        name={HOME_SCREEN}
        children={({ route, navigation }) => (
          <HomeScreen
            route={route}
            navigation={navigation}
            toggleSidePanel={toggleSidePanel}
          />
        )}
      />
      <Tab.Screen
        name={PROFILE_SCREEN}
        children={({ route, navigation }) => (
          <ProfileScreen
            route={route}
            navigation={navigation}
            toggleSidePanel={toggleSidePanel}
          />
        )}
      />
    </Tab.Navigator>
  )
}
