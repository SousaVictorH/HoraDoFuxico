import React from 'react';

import { ButtonProps } from './types';
import { Container, Text } from './styles';

export const Button = ({
  onPress,
  text,
  height,
  marginTop,
  marginBottom,
  appearance,
  style
}: ButtonProps) => {
  return (
    <Container
      marginTop={marginTop}
      marginBottom={marginBottom}
      height={height}
      appearance={appearance}
      activeOpacity={1}
      onPress={onPress}
      style={style}
    >
      <Text appearance={appearance}>{text}</Text>
    </Container>
  );
};

Button.defaultProps = {
  appearance: 'primary',
  marginTop: 'none',
  marginBottom: 'none',
  height: 58,
};
