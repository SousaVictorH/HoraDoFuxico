import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"

export const ContentWrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 70px;
`

export const Image = styled.Image`
  height: 200px;
  width: 229px;

  ${({ theme }: ThemeProps) => css`
    margin: ${theme.spacings.xxxl} ${theme.spacings.none};
  `}
`

export const FormContainer = styled.View`
  flex: 1;
  width: 100%;
`