import React from 'react'

import { StackActions, useNavigation } from '@react-navigation/native'
import { DrawerContentComponentProps } from '@react-navigation/drawer'

import Ionicons from '@expo/vector-icons/Ionicons'

import { useUserStore } from 'store/user'
import { useUserSchedulesStore } from 'store/userSchedules'

import * as RootNavigation from 'routes/RootNavigation'

import {
  EDIT_PROFILE_SCREEN,
  HELP_SCREEN,
  NOTIFICATIONS_SCREEN
} from 'constants/screens'
import { editProfile, help, notifications, leave } from 'constants/texts'

import {
  Container,
  ItemContainer,
  ItemLabel,
  FooterItemContainer
} from './styles'

export const CustomDrawer = ({
  navigation
}: DrawerContentComponentProps) => {
  const stackNavigator = useNavigation()

  const handlePress = (screenName: string) => {
    stackNavigator.dispatch(StackActions.push(screenName))
    navigation.closeDrawer()
  }

  const handleLeave = () => {
    const { clearPersonalData } = useUserStore.getState()
    const { setSchedules } = useUserSchedulesStore.getState()

    // Reset data
    clearPersonalData()
    setSchedules([])

    setTimeout(() => {
      RootNavigation.reset()
    }, 300)
  }

  return (
    <Container>
      <ItemContainer onPress={() => handlePress(EDIT_PROFILE_SCREEN)}>
        <Ionicons name="md-person-outline" size={20} color="#FFF"/>
        <ItemLabel>{editProfile}</ItemLabel>
      </ItemContainer>
      <ItemContainer onPress={() => handlePress(HELP_SCREEN)}>
        <Ionicons name="help" size={20} color="#FFF"/>
        <ItemLabel>{help}</ItemLabel>
      </ItemContainer>
      <ItemContainer onPress={() => handlePress(NOTIFICATIONS_SCREEN)}>
        <Ionicons name="notifications-outline" size={20} color="#FFF"/>
        <ItemLabel>{notifications}</ItemLabel>
      </ItemContainer>
      <FooterItemContainer onPress={handleLeave}>
        <Ionicons name="arrow-undo-outline" size={20} color="#FFF"/>
        <ItemLabel>{leave}</ItemLabel>
      </FooterItemContainer>
    </Container>
  )
}
