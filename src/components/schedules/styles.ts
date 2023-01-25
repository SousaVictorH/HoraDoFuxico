import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"

export const Container = styled.View`
  flex: 1;
  
  ${({ theme }: ThemeProps) => css`
    padding-top: ${theme.spacings.xxxl};
  `}
`

export const Title = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    font-family: ${theme.typography.fontFamily.poppinsBold};
    color: ${theme.colors.neutrals.neutral_60};
    padding-left: ${theme.spacings.lg};
  `}
`

export const HotTopicsList = styled.FlatList``
