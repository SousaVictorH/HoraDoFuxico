import styled, { css } from "styled-components/native"

import { Button as ButtonComponent } from "components/buttons/Button"
import { DateTimeInput as DateTimeInputComponent } from "components/inputs/DateTimeInput"
import { Input as InputComponent } from "components/inputs/Input"

import { ThemeProps } from "styles/types"

export const Container = styled.View`
  flex: 1;
`

export const Title = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    font-family: ${theme.typography.fontFamily.poppinsBold};
    color: ${theme.colors.neutrals.neutral_60};
    margin: ${theme.spacings.xxl} ${theme.spacings.none} ${theme.spacings.md};
  `}
`

export const Button = styled(ButtonComponent)`
  max-height: 58px;
  height: 58px;
  width: 100%;
  margin-top: auto;

  ${({ theme }: ThemeProps) => css`
    margin-bottom: ${theme.spacings.xxxl};
  `}
`

export const DateTimeInput = styled(DateTimeInputComponent)`
  ${({ theme }: ThemeProps) => css`
    margin: ${theme.spacings.none} ${theme.spacings.none} ${theme.spacings.lg};
  `}
`

export const Input = styled(InputComponent)`
  border-width: 1px;

  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.colors.support.transparent};
    border-color: ${theme.colors.neutrals.neutral_10};
    border-radius: ${theme.borderRadius.xxs};
  `}
`
