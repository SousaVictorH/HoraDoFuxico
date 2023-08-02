import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"

export const Container = styled.View``

export const Title = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    font-family: ${theme.typography.fontFamily.poppinsBold};
    color: ${theme.colors.neutrals.neutral_60};
    padding-top: ${theme.spacings.xxl};
  `}
`

export const ListWrapper = styled.View`
  width: 100%;
`

export const HotTopicsList = styled.FlatList``
