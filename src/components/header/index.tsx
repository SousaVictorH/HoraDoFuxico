import React from 'react'
import { DrawerActions } from '@react-navigation/native'

import Ionicons from '@expo/vector-icons/Ionicons'

import { images } from 'resources/images'

import {
  Container,
  ContentWrapper,
  AppNameImage,
  Button
} from './styles'
import { Props } from './types'

export const Header = ({
  navigation
}: Props) => {
  const handlePress = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }

  return (
    <Container>
      <ContentWrapper>
        <Button onPress={() => handlePress()}>
          <Ionicons name="menu" size={32} color="#FFF" />
        </Button>
        <AppNameImage
          source={images.whiteAppName.path}
          resizeMode="contain"
        />
      </ContentWrapper>
    </Container>
  )
}
