import React from 'react'

import * as ImagePicker from 'expo-image-picker'
import Toast from 'react-native-toast-message'

import Ionicons from '@expo/vector-icons/Ionicons'

import {
  Container,
  Caption,
  ButtonWrapper,
  ButtonText
} from './styles'
import { Props } from './types'

import { photoInputPlaceholder, add } from 'constants/texts'

export const PhotoInput = ({
  photo,
  setPhoto,
  style
}: Props) => {
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setPhoto(result.assets[0].uri)
    } else {
      Toast.show({
        type: 'error',
        text1: 'Aleta',
        text2: 'Sem permissao para acessar as fotos'
      })
    }
  }

  return (
    <Container style={style}>
      <Caption>{photoInputPlaceholder}</Caption>
      <ButtonWrapper onPress={() => pickImage()}>
        <Ionicons
          name="attach-outline"
          size={28}
          color={photo ? '#DD9064' : '#4A596B'}
        />
        <ButtonText photo={photo}>{add}</ButtonText>
      </ButtonWrapper>
    </Container>
  )
}
