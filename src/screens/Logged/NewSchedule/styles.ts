import styled, { css } from "styled-components/native"

import { TouchableOpacity } from "react-native-gesture-handler"

import { ThemeProps } from "styles/types"

export const Container = styled.View`
  width: 100%;

  ${({ theme }: ThemeProps) => css`
    padding: 70px ${theme.spacings.xxl};
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
    padding: ${theme.spacings.none} ${theme.spacings.md}
  `}
`

export const Title = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    font-family: ${theme.typography.fontFamily.poppinsBold};
    color: ${theme.colors.neutrals.neutral_60};
  `}
`
