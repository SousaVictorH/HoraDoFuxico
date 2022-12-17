import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { ThemeProviderProps } from './types';

export default function CustomThemeProvider({
  children,
  theme,
}: ThemeProviderProps) {
  return <ThemeProvider theme={{ ...theme }}>{children}</ThemeProvider>;
}
