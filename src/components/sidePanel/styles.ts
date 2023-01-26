import { Animated } from "react-native"

import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"
import { getWindowHeight, getWindowWidth } from "utils/dimensions"

export const Container = styled.TouchableOpacity`
  z-index: 2;
  position: absolute;
  height: ${getWindowHeight()}px;
  width: ${getWindowWidth()}px;

  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.colors.support.modalBackground};
  `}
`

export const PanelContainer = styled(Animated.View)`
  height: 100%;

  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.colors.support.lightOrange};
  `}
`

export const ContentWrapper = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  padding: 120px 20px 65px;
`

export const Item = styled.TouchableOpacity`
  max-height: 30px;
  flex-direction: row;
  align-items: center;
  
  ${({ theme }: ThemeProps) => css`
    margin-bottom: ${theme.spacings.xxl};
  `}
`

export const ArrowText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.secondary.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.neutrals.neutral_60};
    margin-right: ${theme.spacings.md};
  `}
`

export const ItemText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.neutrals.neutral_60};
  `}
`
