import styled, { css } from "styled-components/native"
import Animated, { FadeInUp } from 'react-native-reanimated'

import { ThemeProps } from "styles/types"

export const AnimatedView = styled(Animated.View).attrs({
  entering: FadeInUp
})`
  flex: 1;

  ${({ theme }: ThemeProps) => css`
    margin: ${theme.spacings.spacingTop} ${theme.spacings.xlg} ${theme.spacings.md};
  `}
`

export const ContentWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
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
    line-height: ${theme.typography.elements.heading.lineHeight};
    font-family: ${theme.typography.fontFamily.baskervville};
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
