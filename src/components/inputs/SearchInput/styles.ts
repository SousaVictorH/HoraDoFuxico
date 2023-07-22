import { Pressable } from "react-native"
import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"

export const Wrapper = styled.View`
  flex-direction: row;
  height: 55px;
  width: 100%;
  align-items: center;


  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.colors.technical.input_background};
    border-radius: ${theme.borderRadius.xs};
  `}
`

export const TextInput = styled.TextInput`
  width: 100%;
  height: 100%;

  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.caption.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.support.black};
    padding-horizontal: ${theme.spacings.md};
  `}
`

export const IconWrapper = styled(Pressable)`
  ${({ theme }: ThemeProps) => css`
    margin-left: ${theme.spacings.lg};
  `}
`
