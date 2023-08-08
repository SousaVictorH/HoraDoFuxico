import styled, { css } from "styled-components/native"

import { Pressable } from "react-native"

import { ThemeProps } from "styles/types"

export const Container = styled(Pressable)`
  flex-direction: row;
  width: 100%;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.lg};
    padding-right: ${theme.spacings.lg};
  `}
`

export const TitleContainer = styled.View`
  flex: 1;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-width: 1px;

  ${({ theme }: ThemeProps) => css`
    padding-horizontal: ${theme.spacings.sm};
    border-color: ${theme.colors.neutrals.neutral_20};
    border-radius: ${theme.borderRadius.xxs};
    margin-right: ${theme.spacings.sm};
  `}
`

export const Text = styled.Text`
  text-align: center;
  font-size: 14px;

  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.support.black};
  `}
`

export const Caption = styled.Text`
  font-size: 14px;

  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.support.black};
    margin-left: ${theme.spacings.xs};
  `}
`

export const DateContainer = styled.View`
  width: 120px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  flex-direction: row;

  ${({ theme }: ThemeProps) => css`
    border-color: ${theme.colors.neutrals.neutral_20};
    border-radius: ${theme.borderRadius.xxs};
    margin-right: ${theme.spacings.sm};
  `}
`

export const TimeContainer = styled.View`
  height: 35px;
  width: 75px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  flex-direction: row;

  ${({ theme }: ThemeProps) => css`
    padding-horizontal: ${theme.spacings.md}
    border-color: ${theme.colors.neutrals.neutral_20};
    border-radius: ${theme.borderRadius.xxs};
  `}
`
