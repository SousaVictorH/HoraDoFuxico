
import styled, { css } from "styled-components/native";

import { TextButton as Text } from "components/buttons/TextButton"
import { RadioInput as Input } from 'components/inputs/RadioInput'
import { Button as CustomButton } from "components/buttons/Button"

import { ThemeProps } from "styles/types";

export const Label = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    line-height: ${theme.typography.elements.body.lineHeight};
    font-family: ${theme.typography.fontFamily.poppins};
  `}
`

export const TextButton = styled(Text)`
  letter-spacing: 0.7px;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.sm};
  `}
`

export const RadioInput = styled(Input)`
  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.lg};
  `}
`

export const Button = styled(CustomButton)`
  width: 100%;
`
