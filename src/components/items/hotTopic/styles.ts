import styled, { css } from 'styled-components/native'

import { ThemeProps } from 'styles/types'

export const Container = styled.View`
  width: 220px;
  height: 120px;
  flex-direction: row;
  align-items: center;

  ${({ theme }: ThemeProps) => css`
    border: 0.5px solid ${theme.colors.neutrals.neutral_20};
    border-radius: ${theme.borderRadius.xxs};
    margin-vertical: ${theme.spacings.md};
    margin-right: ${theme.spacings.md};
    padding: ${theme.spacings.md} ${theme.spacings.lg};
    background-color: ${theme.colors.background.light};
  `}
`

export const TextContainer = styled.View`
  height: 100%;
  width: 60%;
`

export const Title = styled.Text`
  text-transform: uppercase;
  letter-spacing: 2.5px;

  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.neutrals.neutral_60};
  `}
`

export const Description = styled.Text`
  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.sm}
    font-size: ${theme.typography.elements.secondary.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.support.beige_50};
  `}
`

export const Image = styled.Image`
  height: 120%;
  width: 48%;
`
