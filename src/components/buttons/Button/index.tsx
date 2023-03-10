import React from 'react';

import { enter } from 'constants/texts';

import { ButtonProps } from './types';
import { Container, Text } from './styles';

export const Button = ({
  onPress,
  text,
  height,
  marginTop,
  marginBottom,
  appearance,
  disabled,
  style
}: ButtonProps) => {
  const handlePress = () => {
    !disabled && onPress()
  }

  return (
    <Container
      marginTop={marginTop}
      marginBottom={marginBottom}
      height={height}
      appearance={appearance}
      activeOpacity={1}
      onPress={handlePress}
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
  text: enter,
  disabled: false
};
