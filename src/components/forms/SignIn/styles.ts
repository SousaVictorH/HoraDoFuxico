import styled, { css } from 'styled-components/native'
import { Button } from 'components/buttons/Button'

import { ThemeProps } from 'styles/types'

export const Label = styled.Text`
  ${({ theme }: ThemeProps) => css`
    margin-bottom: ${theme.spacings.sm};
    font-size: ${theme.typography.elements.body.fontSize};
    line-height: ${theme.typography.elements.body.lineHeight};
    font-family: ${theme.typography.fontFamily.poppins};
  `}
`

export const FormButton = styled(Button)`
  width: 100%;

  ${({ theme }: ThemeProps) => css`
    margin: ${theme.spacings.md} ${theme.spacings.none};
  `}
`

export const SocialSignInWrapper = styled.View`
  width: 100%;
  align-items: center;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.md};
  `}
`

export const SocialDiv = styled.View`
  width: 100%;
  position: absolute;
  border-bottom-width: 1px;
  top: 7px;

  ${({ theme }: ThemeProps) => css`
    border-bottom-color: ${theme.colors.neutrals.neutral_20};
  `}
`

export const SocialSignInLabel = styled.Text`
  text-align: center;
  width: 150px;
  text-transform: uppercase;

  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.secondary.fontSize};
    line-height: ${theme.typography.elements.secondary.lineHeight};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.neutrals.neutral_80};
    background-color: ${theme.colors.background.offLight};
  `}
`

export const SocialMediaButtonsContainer = styled.View`
  width: 200px;
  flex-direction: row;
  justify-content: space-around;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.md};
  `}
`
