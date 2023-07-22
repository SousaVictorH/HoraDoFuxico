import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"

export const ContentWrapper = styled.View`
  flex: 1;
  width: 100%;
`

export const List = styled.FlatList`
  flex: 1;

  ${({ theme }: ThemeProps) => css`
    padding: ${theme.spacings.xxs} ${theme.spacings.lg};
  `}
`

export const Header = styled.View`
  width: 100%;

  ${({ theme }: ThemeProps) => css`
    padding: ${theme.spacings.lg};
  `}
`

export const Spinner = styled.ActivityIndicator.attrs({
  size: 'small',
  color: 'gray'
})`
  ${({ theme }: ThemeProps) => css`
    margin-vertical: ${theme.spacings.md};
  `}
`
