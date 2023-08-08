import styled, { css } from "styled-components/native"

import { Button as ButtonComponent } from "components/buttons/Button"
import { DateTimeInput as DateTimeInputComponent } from "components/inputs/DateTimeInput"
import { RadioInput as RadioInputComponent } from "components/inputs/RadioInput"

import { ThemeProps } from "styles/types"

export const ContentWrapper = styled.View`
  flex: 1;

  ${({ theme }: ThemeProps) => css`
    padding: ${theme.spacings.xxl} ${theme.spacings.xlg} ${theme.spacings.lg};
  `}
`

export const InputCaption = styled.Text`
  ${({ theme }: ThemeProps) => css`
    margin-bottom: ${theme.spacings.lg};
    font-size: ${theme.typography.elements.body.fontSize};
    font-family: ${theme.typography.fontFamily.poppinsBold};
    color: ${theme.colors.neutrals.neutral_60};
  `}
`

export const RadioInputsContainer = styled.View`
  ${({ theme }: ThemeProps) => css`
    padding-bottom: ${theme.spacings.md};
    margin-horizontal: ${theme.spacings.xxl};
  `}
`

export const RadioInput = styled(RadioInputComponent)`
  ${({ theme }: ThemeProps) => css`
    margin-bottom: ${theme.spacings.xlg};
  `}
`

export const DateTimeInput = styled(DateTimeInputComponent)`
  ${({ theme }: ThemeProps) => css`
    margin-bottom: ${theme.spacings.md};
  `}
`

export const Button = styled(ButtonComponent)`
  max-height: 58px;
  height: 58px;
  width: 100%;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.auto};
  `}
`
