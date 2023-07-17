
import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"
import { ButtonTextProps } from './types'

export const Container = styled.View`
  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.md};
  `}
`

export const Caption = styled.Text`
  max-width: 300px;

  ${({ theme }: ThemeProps) => css`
    color: ${theme.colors.neutrals.neutral_40};
    font-size: ${theme.typography.elements.body.fontSize};
    line-height: ${theme.typography.elements.body.lineHeight};
    font-family: ${theme.typography.fontFamily.poppins};
  `}
`

export const ButtonWrapper = styled.TouchableOpacity`
  flex-direction: row;
  border-width: 1px;
  width: 140px;
  height: 48px;
  align-items: center;

  ${({ theme }: ThemeProps) => css`
    border-color: ${theme.colors.neutrals.neutral_10};
    padding: 0 ${theme.spacings.sm};
    margin-top: ${theme.spacings.md};
  `}
`

export const ButtonText = styled.Text`
  ${({ theme, photo }: ThemeProps & ButtonTextProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    margin-left: ${theme.spacings.md};
    color: ${photo ? theme.colors.support.orange : theme.colors.support.black};
  `}
`
