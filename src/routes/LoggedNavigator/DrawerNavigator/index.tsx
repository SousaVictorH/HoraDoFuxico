import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'

import {
  EDIT_PROFILE_SCREEN,
  HELP_SCREEN,
  NOTIFICATIONS_SCREEN,
  STACK_NAVIGATOR
} from 'constants/screens'

import { CustomDrawer } from 'components/customDrawer'

import { StackNavigator } from '../StackNavigator'

import { EditProfileScreen } from 'screens/Logged/EditProfile'
import { HelpScreen } from 'screens/Logged/Help'
import { NotificationsScreen } from 'screens/Logged/Notifications'

import { RootParamList } from 'routes/types'
import { loggedScreenOptions } from 'routes/LoggedNavigator/options'

const Drawer = createDrawerNavigator<RootParamList>()

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={STACK_NAVIGATOR}
      screenOptions={loggedScreenOptions}
      drawerContent={CustomDrawer}
    >
      <Drawer.Screen
        name={STACK_NAVIGATOR}
        component={StackNavigator}
      />
      <Drawer.Screen
        name={EDIT_PROFILE_SCREEN}
        component={EditProfileScreen}
      />
      <Drawer.Screen
        name={HELP_SCREEN}
        component={HelpScreen}
      />
      <Drawer.Screen
        name={NOTIFICATIONS_SCREEN}
        component={NotificationsScreen}
      />
    </Drawer.Navigator>
  )
}
