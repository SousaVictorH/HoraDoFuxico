import React from 'react'
import { StatusBar } from 'expo-status-bar'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import ThemeProvider from './ThemeProvider'
import theme from 'styles/theme'

import { Container } from './styles'
import { AppWrapperProps } from './types'

export const AppWrapper = ({
  children,
  theme,
  onLayout
}: AppWrapperProps) => {
  const insets = useSafeAreaInsets()

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor='#fcfcfc' translucent />
      <Container
        onLayout={onLayout}
        style={{ marginTop: insets.top }}
      >
        {children}
      </Container>
    </ThemeProvider>
  );
}

AppWrapper.defaultProps = {
  theme: theme,
};
