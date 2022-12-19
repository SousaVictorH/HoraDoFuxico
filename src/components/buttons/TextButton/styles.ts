import styled, { css } from "styled-components/native"
import { ThemeProps } from "styles/types"

import { getTextAppearance } from './appearence'
import { TextProps } from './types'

export const Container = styled.TouchableOpacity``

export const Text = styled.Text`
  ${({ theme }: ThemeProps & TextProps) => css`
    font-size: ${theme.typography.elements.secondary.fontSize};
    font-weigth: ${theme.typography.elements.secondary.fontWeight};
    line-height: ${theme.typography.elements.secondary.lineHeight};
    font-family: ${theme.typography.fontFamily.normal};
    ${getTextAppearance}
  `}
`