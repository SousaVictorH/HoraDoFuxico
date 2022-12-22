
import styled, { css } from "styled-components/native"

import { Button } from 'components/buttons/Button'
import { ThemeProps } from "styles/types"

export const FormButton = styled(Button)`
  width: 100%;
`

export const ContentWrapper = styled.View`
  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.xxxl};
    padding: ${theme.spacings.none} ${theme.spacings.xxl};
  `}
`
