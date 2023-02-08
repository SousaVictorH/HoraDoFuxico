import styled, { css } from "styled-components/native"
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated'

import { getWindowWidth } from "utils/dimensions"

import { ThemeProps } from "styles/types"

const containerWidth = getWindowWidth() * 0.9

export const Container = styled(Animated.View).attrs({
  entering: FadeInUp,
  exiting: FadeOutUp
})`
  top: 70px;
  left: 50%;
  width: 90%;
  min-height: 60px;
  position: absolute;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  shadow-radius: 2px;
  elevation: 2;
  z-index: 2;
  shadow-opacity: 0.4;

  ${({ theme }: ThemeProps) => css`
    border-radius: ${theme.borderRadius.xs};
    background-color: ${theme.colors.support.blue_50};
    padding: ${theme.spacings.xlg};
    shadow-color: ${theme.colors.support.shadow};
    width: ${containerWidth}px;
    margin-left: -${containerWidth / 2}px;
  `}
`

export const Icon = styled.Image`
  height: 30px;
  width: 30px;
`

export const ContentWrapper = styled.View`
  ${({ theme }: ThemeProps) => css`
    margin-left: ${theme.spacings.lg};
  `}
`

export const Title = styled.Text`
  ${({ theme }: ThemeProps) => css`
    margin-bottom: ${theme.spacings.sm};
    font-size: ${theme.typography.elements.caption.fontSize};
    line-height: ${theme.typography.elements.caption.lineHeight};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.neutrals.white};
  `}
`

export const Description = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    line-height: ${theme.typography.elements.body.lineHeight};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.neutrals.white};
  `}
`
