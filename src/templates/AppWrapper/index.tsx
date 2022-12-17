import React from 'react';

import theme from '../../styles/theme';

import { Container } from './styles';
import ThemeProvider from './ThemeProvider';
import { AppWrapperProps } from './types';

export default function AppWrapper({ children, theme, onLayout }: AppWrapperProps) {
  return (
    <ThemeProvider theme={theme}>
      <Container onLayout={onLayout}>{children}</Container>
    </ThemeProvider>
  );
}

AppWrapper.defaultProps = {
  theme: theme,
};
