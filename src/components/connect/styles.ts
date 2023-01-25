import styled, { css } from "styled-components/native"

import { Button as ButtonComponent } from 'components/buttons/Button'

import { ThemeProps } from "styles/types"

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.heading.fontSize};
    font-family: ${theme.typography.fontFamily.baskervville};
    color: ${theme.colors.neutrals.neutral_60};
  `}
`

export const Button = styled(ButtonComponent)`
  height: 36px;
  width: 145px;
  flex: 0;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.lg};
    margin-bottom: ${theme.spacings.xxxl};
  `}
`

export const KeyWrapper = styled.View`
  height: 140px;
  width: 54%;
  border-width: 1px;
  justify-content: center;
  align-items: center;

  ${({ theme }: ThemeProps) => css`
    border-color: ${theme.colors.neutrals.neutral_20};
    margin: ${theme.spacings.lg} ${theme.spacings.none};
    border-radius: ${theme.borderRadius.sm};
  `}
`

export const SubTitle = styled.Text`
  text-transform: uppercase;

  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.caption.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.neutrals.neutral_40};
    margin-top: ${theme.spacings.sm};
  `}
`

export const Title = styled.Text`
  font-size: 48px;

  ${({ theme }: ThemeProps) => css`
    font-family: ${theme.typography.fontFamily.poppinsBold};
    color: ${theme.colors.neutrals.neutral_60};
  `}
`

export const Caption = styled.Text`
  max-width: 195px;
  text-align: center;

  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.support.black};
    margin-top: ${theme.spacings.sm};
    margin-bottom: ${theme.spacings.xxxl};
  `}
`
