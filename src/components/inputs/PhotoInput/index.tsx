import * as ImagePicker from 'expo-image-picker';

import { useToastStore } from 'store/toast';
import { ToastTypes, ToastTitles } from 'store/toast/types';

import {
  Container,
  Caption,
  ButtonWrapper,
  ButtonIcon,
  ButtonText
} from './styles'
import { Props } from './types'

import { photoInputPlaceholder, add } from 'constants/texts'
import { icons } from 'resources/icons';

export const PhotoInput = ({
  photo,
  setPhoto,
  style
}: Props) => {
  const { launchToast } = useToastStore()

  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const requestImage = async () => {
    // Check permissions
    if (!status?.granted) {
      // If no permission ask for it
      const response = await requestPermission()

      if (response.status !== 'granted') {
        // If no permission allowed throw alert
        launchToast({
          type: ToastTypes.WARNING,
          title: ToastTitles.ALERT,
          description: 'Sem permissao para acessar as fotos'
        })
      } else {
        // Else pick image
        pickImage()
      }
    } else {
      pickImage()
    }
  }

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) setPhoto(result.assets[0].uri)
  }

  return (
    <Container style={style}>
      <Caption>{photoInputPlaceholder}</Caption>
      <ButtonWrapper onPress={() => requestImage()}>
        <ButtonIcon
          source={photo ?
            icons.addPhotoOrangeIcon.path :
            icons.addPhotoIcon.path
          }
          resizeMode="contain"
        />
        <ButtonText photo={photo}>{add}</ButtonText>
      </ButtonWrapper>
    </Container>
  )
}