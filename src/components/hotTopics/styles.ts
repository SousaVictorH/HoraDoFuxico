import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"

export const Container = styled.View`
  flex: 1;
`

export const Title = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    font-family: ${theme.typography.fontFamily.poppinsBold};
    color: ${theme.colors.neutrals.neutral_60};
    padding-left: ${theme.spacings.lg};
  `}
`

export const ListWrapper = styled.View`
  ${({ theme }: ThemeProps) => css`
    margin-bottom: ${theme.spacings.lg};
  `}
`

export const HotTopicsList = styled.FlatList``
