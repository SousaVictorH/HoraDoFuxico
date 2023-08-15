import styled, { css } from 'styled-components/native'
import { ThemeProps } from 'styles/types'

import { getTextAppearance } from './appearence'
import { TextProps } from './types'

export const Text = styled.Text`
  ${({ theme }: ThemeProps & TextProps) => css`
    font-size: ${theme.typography.elements.secondary.fontSize};
    line-height: ${theme.typography.elements.secondary.lineHeight};
    font-family: ${theme.typography.fontFamily.poppins};
    ${getTextAppearance}
  `}
`
