import React from 'react'

import { Container, Image } from './styles'
import { SocialMediaButtonProps } from './types'

const SocialMediaButton = ({
  onPress,
  iconSource,
  style,
  appearance,
}: SocialMediaButtonProps) => {
  return (
    <Container
      style={style}
      onPress={onPress}
      appearance={appearance}
      activeOpacity={1}
    >
      <Image source={iconSource} appearance={appearance} resizeMode="contain" />
    </Container>
  )
}

SocialMediaButton.defaultProps = {
  appearance: 'Google',
}

export default SocialMediaButton
