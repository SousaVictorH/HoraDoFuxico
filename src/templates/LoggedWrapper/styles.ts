import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"

export const Container = styled.View`
  flex: 1;
  width: 100%;
`

export const ContentWrapper = styled.View`
  flex: 1;

  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.colors.background.offLight};
  `}
`
