import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"

export const ProfileWrapper = styled.View`
  width: 100%;
  align-items: center;
`

export const ProfileImage = styled.Image`
  width: 143px;
  height: 143px;
  border-radius: 100%;
  border-width: 5px;

  background-color: gray;

  ${({ theme }: ThemeProps) => css`
    margin-top: -${theme.spacings.xxl};
    border-color: ${theme.colors.background.offLight};
  `}
`

export const ProfileName = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.caption.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.support.black};
    margin-top: ${theme.spacings.md};
  `}
`

export const ProfileAge = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.caption.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.neutrals.neutral_60};
  `}
`

export const ContentWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.caption.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.neutrals.neutral_60};
  `}
`
