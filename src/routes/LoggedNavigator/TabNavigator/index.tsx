/* eslint-disable react/no-children-prop */
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { TabBar } from 'components/tabBar'

import {
  HOME_SCREEN,
  MY_PROFILE_SCREEN,
  SEARCH_SCREEN
} from 'constants/screens'

import { defaultScreenOptions } from 'routes/options'
import { RootParamList } from 'routes/types'

import { MyProfileScreen } from 'screens/Logged/MyProfile'
import { HomeScreen } from 'screens/Logged/Home'

import { SearchScreen } from 'screens/Logged/Search'

const Tab = createBottomTabNavigator<RootParamList>()

export const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName={HOME_SCREEN}
    tabBar={({ descriptors, navigation, state }) => (
      <>
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
        />
      )}
    />
    <Tab.Screen
      name={HOME_SCREEN}
      children={({ route, navigation }) => (
        <HomeScreen
          route={route}
          navigation={navigation}
        />
      )}
    />
    <Tab.Screen
      name={MY_PROFILE_SCREEN}
      children={({ route, navigation }) => (
        <MyProfileScreen
          route={route}
          navigation={navigation}
        />
      )}
    />
  </Tab.Navigator>
)

