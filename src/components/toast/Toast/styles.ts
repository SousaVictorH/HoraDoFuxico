import styled, { css } from "styled-components/native"
import Animated, { FadeInUp, FadeOutDown } from 'react-native-reanimated'

import { ToastTypes } from "store/toast/types"

import { ThemeProps } from "styles/types"
import { BarProps } from "./types"

export const Container = styled(Animated.View).attrs({
  entering: FadeInUp,
  exiting: FadeOutDown
})`
  flex-direction: row;
  width: 100%;
  min-height: 50px;
  overflow: hidden;

  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.colors.technical.toast_background};
    border-radius: ${theme.borderRadius.xs};
    shadow-color: ${theme.colors.support.shadow};
  `}
`

export const Bar = styled.View`
  width: 15px;
  heigth: 100%;

  ${({ theme, type }: ThemeProps & BarProps) => css`
    background-color: ${type === ToastTypes.SUCCESS ? theme.colors.technical.success_background :
      type === ToastTypes.WARNING ? theme.colors.technical.problem_background :
        theme.colors.support.blue_50
    };
  `}
`

export const ContentWrapper = styled.View`
  ${({ theme }: ThemeProps) => css`
    padding: ${theme.spacings.sm};
  `}
`

export const Title = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.secondary.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.neutrals.neutral_80};
  `}
`

export const Description = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.secondary.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.neutrals.neutral_80};
    margin-top: ${theme.spacings.xxs};
  `}
`
