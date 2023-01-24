import { images } from 'resources/images'

import {
  Container,
  AppNameImage,
  Button
} from "./styles"
import { ToggleIcon } from 'resources/svgIcons'

export const Header = () => {
  const handlePress = () => {
    // toggle
  }

  return (
    <Container>
      <Button onPress={handlePress}>
        <ToggleIcon height={22} width={22} />
      </Button>
      <AppNameImage
        source={images.whiteAppName.path}
        resizeMode="contain"
      />
    </Container>
  )
}