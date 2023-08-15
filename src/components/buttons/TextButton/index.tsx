import React from 'react'

import { Text } from './styles'
import { Props } from './types'

export const TextButton = ({
  onPress,
  text,
  style,
  appearance
}: Props) => {
  return (
    <Text
      onPress={onPress}
      appearance={appearance}
      style={style}
    >
      {text}
    </Text>
  )
}

TextButton.defaultProps = {
  text: '',
  appearance: 'primary'
}
