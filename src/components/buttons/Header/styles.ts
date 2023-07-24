import { Pressable } from "react-native"
import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"

export const Header = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  width: 100%;

  ${({ theme }: ThemeProps) => css`
    padding: 55px ${theme.spacings.xxl} ${theme.spacings.xxxl};
  `}
`

export const IconWrapper = styled.View`
  ${({ theme }: ThemeProps) => css`
    margin-right: ${theme.spacings.md};
    margin-left: -${theme.spacings.xs};
  `}
`

export const HeaderText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.heading.fontSize};
    font-family: ${theme.typography.fontFamily.baskervville};
  `}
`
