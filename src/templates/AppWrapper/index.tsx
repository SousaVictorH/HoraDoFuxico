import React from 'react';
import { StatusBar } from 'expo-status-bar';

import theme from 'styles/theme';

import { Container } from './styles';
import ThemeProvider from './ThemeProvider';
import { AppWrapperProps } from './types';

export const AppWrapper = ({
  children,
  theme,
  onLayout
}: AppWrapperProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar hidden />
      <Container onLayout={onLayout}>{children}</Container>
    </ThemeProvider>
  );
}

AppWrapper.defaultProps = {
  theme: theme,
};
