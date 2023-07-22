import { Pressable } from "react-native"
import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"

export const ItemWrapper = styled(Pressable)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-width: 1px;

  ${({ theme }: ThemeProps) => css`
    padding: ${theme.spacings.lg} ${theme.spacings.sm};
    margin-bottom: ${theme.spacings.md};
    border-color: ${theme.colors.neutrals.neutral_20};
    border-radius: ${theme.borderRadius.sm};
  `}
`

export const UserAvatar = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 100%;
`

export const UserName = styled.Text`
  font-size: 16px;

  ${({ theme }: ThemeProps) => css`
    margin-left: ${theme.spacings.md};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.support.black};
  `}
`
