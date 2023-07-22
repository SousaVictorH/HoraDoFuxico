import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"

export const ContentWrapper = styled.View`
  flex: 1;
  width: 100%;
`

export const List = styled.FlatList`
  flex: 1;
`

export const Header = styled.View`
  width: 100%;

  ${({ theme }: ThemeProps) => css`
    padding: ${theme.spacings.lg};
  `}
`

export const ItemWrapper = styled.View`
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text``
