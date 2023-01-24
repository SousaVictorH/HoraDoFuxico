import { images } from 'resources/images'
import { icons } from 'resources/icons'

import {
  Container,
  AppNameImage,
  Button,
  ButtonIcon
} from "./styles"

export const Header = () => {
  const handlePress = () => {
    // toggle
  }

  return (
    <Container>
      <Button onPress={handlePress}>
        <ButtonIcon
          source={icons.toggleIcon.path}
          resizeMode="contain"
        />
      </Button>
      <AppNameImage
        source={images.whiteAppName.path}
        resizeMode="contain"
      />
    </Container>
  )
}