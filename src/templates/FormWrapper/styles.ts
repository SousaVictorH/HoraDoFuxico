
import styled, { css } from 'styled-components/native'
import { Props } from './types'

export const Container = styled.View`
  flex: 1;

  ${({ justifyContent }: Props) => css`
    justify-content: ${justifyContent};
  `}
`
