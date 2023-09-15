import React from 'react'

import {
  DrawerContentComponentProps,
  DrawerItem
} from '@react-navigation/drawer'

import {
  STACK_NAVIGATOR,
  EDIT_PROFILE_SCREEN,
  HELP_SCREEN,
  NOTIFICATIONS_SCREEN
} from 'constants/screens'

import { Container } from './styles'

export const CustomDrawer = ({
  navigation
}: DrawerContentComponentProps) => {

  return (
    <Container>
      <DrawerItem
        label="Home"
        onPress={() => navigation.jumpTo(STACK_NAVIGATOR)}
      />
      <DrawerItem
        label="Editar Perfil"
        onPress={() => navigation.jumpTo(EDIT_PROFILE_SCREEN)}
      />
      <DrawerItem
        label="Ajuda"
        onPress={() => navigation.jumpTo(HELP_SCREEN)}
      />
      <DrawerItem
        label="Notificações"
        onPress={() => navigation.jumpTo(NOTIFICATIONS_SCREEN)}
      />
    </Container>
  )
}
