import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"

export const Header = styled.View`
  ${({ theme }: ThemeProps) => css`
    padding-vertical: ${theme.spacings.xxxl};
  `}
`

export const HeaderText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.heading.fontSize};
    font-family: ${theme.typography.fontFamily.baskervville};
    padding-left: ${theme.spacings.lg};
  `}
`

export const ContentWrapper = styled.View`
  flex: 1;
`
