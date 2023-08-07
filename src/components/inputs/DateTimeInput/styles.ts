import styled, { css } from "styled-components/native"

import { TouchableOpacity } from "react-native-gesture-handler"

import { ThemeProps } from "styles/types"

export const Button = styled(TouchableOpacity)`
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 55px;

  ${({ theme }: ThemeProps) => css`
    border-radius: ${theme.borderRadius.xxs};
    padding: ${theme.spacings.md} ${theme.spacings.lg};
    border-color: ${theme.colors.neutrals.neutral_10};
    background-color: ${theme.colors.support.transparent};
  `}
`

export const ButtonText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.caption.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.support.black};
  `}
`
