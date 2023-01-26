import { images } from 'resources/images'

import { ToggleIcon } from 'resources/svgIcons'

import {
  Container,
  AppNameImage,
  Button
} from "./styles"
import { Props } from './types'

export const Header = ({
  toggleSidePanel
}: Props) => {
  return (
    <Container>
      <Button onPress={toggleSidePanel}>
        <ToggleIcon height={22} width={22} />
      </Button>
      <AppNameImage
        source={images.whiteAppName.path}
        resizeMode="contain"
      />
    </Container>
  )
}