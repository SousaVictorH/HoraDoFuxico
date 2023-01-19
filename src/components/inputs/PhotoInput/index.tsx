import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

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
  setPhoto,
  style
}: Props) => {
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const pickImage = async () => {
    // Check permissions
    if (!status?.granted) {
      // If no permission ask for it
      const response = await ImagePicker.requestMediaLibraryPermissionsAsync()

      if (response.status === 'granted') {
        // If no permission allowed throw alert
        Alert.alert('Warning', 'Permission denied')
      }
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      })

      if (!result.canceled) setPhoto(result.assets[0].uri)
    }
  };

  return (
    <Container style={style}>
      <Caption>{photoInputPlaceholder}</Caption>
      <ButtonWrapper onPress={() => pickImage()}>
        <ButtonIcon
          source={icons.addPhotoIcon.path}
          resizeMode="contain"
        />
        <ButtonText>{add}</ButtonText>
      </ButtonWrapper>
    </Container>
  )
}