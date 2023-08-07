import Ionicons from '@expo/vector-icons/Ionicons'

import { images } from 'resources/images'

import {
  Container,
  ContentWrapper,
  AppNameImage,
  Button
} from "./styles"
import { Props } from './types'

export const Header = ({
  toggleSidePanel
}: Props) => (
  <Container>
    <ContentWrapper>
      <Button onPress={() => toggleSidePanel()}>
        <Ionicons name="menu" size={32} color="#FFF" />
      </Button>
      <AppNameImage
        source={images.whiteAppName.path}
        resizeMode="contain"
      />
    </ContentWrapper>
  </Container>
)