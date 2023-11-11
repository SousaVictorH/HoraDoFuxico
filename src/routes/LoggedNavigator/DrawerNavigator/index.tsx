import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'

import { STACK_NAVIGATOR } from 'constants/screens'

import { CustomDrawer } from 'components/customDrawer'

import { StackNavigator } from '../StackNavigator'

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
    </Drawer.Navigator>
  )
}
