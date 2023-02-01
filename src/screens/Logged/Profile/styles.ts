import styled, { css } from "styled-components/native"

import { TouchableOpacity } from "react-native-gesture-handler"

import { getWindowHeight } from "utils/dimensions"

import { ThemeProps } from "styles/types"

export const Wrapper = styled.View`
  width: 100%;
  height: ${getWindowHeight()}px;
`

export const Container = styled.View`
  width: 100%;

  ${({ theme }: ThemeProps) => css`
    padding: 70px ${theme.spacings.xxl} ${theme.spacings.xxxl};
  `}
`

export const Header = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`

export const IconWrapper = styled.View`
  ${({ theme }: ThemeProps) => css`
    margin-right: ${theme.spacings.md};
  `}
`

export const HeaderText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.heading.fontSize};
    font-family: ${theme.typography.fontFamily.baskervville};
  `}
`

export const ContentWrapper = styled.View`
  flex: 1;
  
  ${({ theme }: ThemeProps) => css`
    padding: ${theme.spacings.none} ${theme.spacings.xlg}
  `}
`
