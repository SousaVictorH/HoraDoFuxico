import styled, { css } from 'styled-components/native'

import { ThemeProps } from 'styles/types'

export const Wrapper = styled.View`
  flex: 1;
`

export const ContentWrapper = styled.View`
  flex: 1;

  ${({ theme }: ThemeProps) => css`
    padding: ${theme.spacings.none} ${theme.spacings.xlg}
  `}
`
