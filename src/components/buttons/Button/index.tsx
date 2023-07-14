import React from 'react';

import { enter } from 'constants/texts';

import { ButtonProps } from './types';
import { Container, Spinner, Text } from './styles';

export const Button = ({
  onPress,
  text,
  height,
  marginTop,
  marginBottom,
  appearance,
  disabled,
  style,
  isLoading
}: ButtonProps) => {
  const handlePress = () => {
    !disabled && onPress()
  }

  return (
    <Container
      marginTop={marginTop}
      marginBottom={marginBottom}
      height={height}
      appearance={(disabled || isLoading) ? 'disabled' : appearance}
      activeOpacity={1}
      onPress={handlePress}
      style={style}
    >
      {
        isLoading ? (
          <Spinner />
        ) : (
          <Text appearance={appearance}>{text}</Text>
        )
      }
    </Container>
  );
};

Button.defaultProps = {
  appearance: 'primary',
  marginTop: 'none',
  marginBottom: 'none',
  height: 58,
  text: enter,
  disabled: false,
  isLoading: false
};
