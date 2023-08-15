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
  const { top, bottom } = useSafeAreaInsets()

  theme.spacings.spacingTop = `${top < 10 ? 10 : top}px`
  theme.spacings.spacingBottom = `${bottom < 18 ? 18 : bottom}px`

  return (
    <ThemeProvider theme={theme}>
      <StatusBar hidden />
      <Container onLayout={onLayout}>
        {children}
      </Container>
    </ThemeProvider>
  )
}

AppWrapper.defaultProps = {
  theme: theme,
}
