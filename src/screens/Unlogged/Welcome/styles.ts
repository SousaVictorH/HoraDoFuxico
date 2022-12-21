import styled, { css } from "styled-components/native"
import { Animated } from "react-native"

import { ThemeProps } from "styles/types"
import { getWindowWidth, getWindowHeight } from "utils/dimensions"

export const AnimatedView = styled(Animated.View)`
  position: absolute;
  height: ${getWindowHeight()}px;
  width: ${getWindowWidth()}px;

  ${({ theme }: ThemeProps) => css`
    padding: 0px ${theme.spacings.xlg};
  `}
`

export const ContentWrapper = styled.View`
  position: relative;
  width: 100%;
  height: ${getWindowHeight() - 100}px;
  align-items: center;
  justify-content: space-between;

  ${({ theme }: ThemeProps) => css`
    padding-bottom: ${theme.spacings.xlg};
  `}
`

export const AppNameImage = styled.Image`
  width: 180px;
  height: 30px;
`

export const SubTitle = styled.Text`
  text-align: center;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.xxxl};
    margin-bottom: ${theme.spacings.xxl};
    font-size: ${theme.typography.elements.heading.fontSize};
    font-weigth: ${theme.typography.elements.heading.fontWeight};
    line-height: ${theme.typography.elements.heading.lineHeight};
    font-family: ${theme.typography.fontFamily.normal};
  `}
`

export const AppImage = styled.Image`
  width: 262px;
  height: 248px;
`

export const FormContainer = styled.View`
  flex: 1;
  width: 100%;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.xxxl};
  `}
`
