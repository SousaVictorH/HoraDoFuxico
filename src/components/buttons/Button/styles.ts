import styled, { css } from 'styled-components/native'

import { ThemeProps } from 'styles/types'

import { getButtonAppearance, getTextAppearance } from './appearance'
import { ButtonWrapperProps, TextProps } from './types'

export const Container = styled.TouchableOpacity`
  align-self: center;
  justify-content: center;
  align-items: center;

  ${({
    theme,
    marginTop,
    marginBottom,
    height,
  }: ThemeProps & ButtonWrapperProps) => css`
    margin: ${theme.spacings.none} ${theme.spacings.sm};
    margin-top: ${theme.spacings[marginTop]};
    margin-bottom: ${theme.spacings[marginBottom]};
    border-radius: ${theme.borderRadius.xs};
    height: ${height}px;
    min-height: 58px;
    ${getButtonAppearance}
  `}
`

export const Spinner = styled.ActivityIndicator.attrs({
  size: 'small',
  color: 'gray'
})``

export const Text = styled.Text`
  text-transform: uppercase;

  ${({ theme }: ThemeProps & TextProps) => css`
    font-family: ${theme.typography.fontFamily.poppins};
    font-size: ${theme.typography.elements.body.fontSize};
    line-height: ${theme.typography.elements.body.lineHeight};
    ${getTextAppearance}
  `}
`
