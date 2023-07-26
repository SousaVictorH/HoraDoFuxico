import styled, { css } from "styled-components/native"

import { TextButton as TextButtonComponent } from "components/buttons/TextButton"

import { ThemeProps } from "styles/types"

export const Container = styled.View`
  flex: 1;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.xxl};
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

export const SchedulesList = styled.FlatList`
  flex: 1;

  ${({ theme }: ThemeProps) => css`
    padding-left: ${theme.spacings.lg};
  `}
`

export const TextButton = styled(TextButtonComponent)`
  ${({ theme }: ThemeProps) => css`
    margin: ${theme.spacings.lg} ${theme.spacings.none};
  `}
`

export const EmptyText = styled.Text`
  width: 310px;
  
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.secondary.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.neutrals.neutral_60};
    margin-top: ${theme.spacings.md};
  `}
`
