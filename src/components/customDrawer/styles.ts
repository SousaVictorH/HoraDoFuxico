import styled, { css } from 'styled-components/native'

import { DrawerContentScrollView } from '@react-navigation/drawer'

import { ThemeProps } from 'styles/types'

export const Container = styled(DrawerContentScrollView)`
  flex: 1;

  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.colors.background.offLight};
  `}
`
