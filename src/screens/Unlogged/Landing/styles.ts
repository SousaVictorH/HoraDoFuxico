import styled, { css } from "styled-components/native"
import Animated, { FadeInUp } from 'react-native-reanimated'

import { ThemeProps } from "styles/types"

export const AnimatedView = styled(Animated.View).attrs({
  entering: FadeInUp
})`
  flex: 1;

  ${({ theme }: ThemeProps) => css`
    margin: ${theme.spacings.spacingTop} 6% ${theme.spacings.xlg};
  `}
`

export const ContentWrapper = styled.View`
  flex: 1;
  align-items: center;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.sm};
  `}
`

export const AppNameImage = styled.Image`
  width: 180px;
  height: 30px;
`

export const SubTitle = styled.Text`
  text-align: center;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.lg};
    font-size: ${theme.typography.elements.heading.fontSize};
    line-height: ${theme.typography.elements.heading.lineHeight};
    font-family: ${theme.typography.fontFamily.baskervville};
  `}
`

export const AppImageContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;

  ${({ theme }: ThemeProps) => css`
    padding-vertical: ${theme.spacings.md};
  `}
`

export const AppImage = styled.Image`
  width: 95%;
  height: 95%;
`

export const FormContainer = styled.View`
  flex: 1;
  max-height: 245px;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.auto};
  `}
`
