import styled, { css } from "styled-components/native";

import { TextButton } from "components/buttons/TextButton";

import { ThemeProps } from "styles/types";

export const Label = styled.Text`
  text-align: center;

  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    line-height: ${theme.typography.elements.body.lineHeight};
    font-family: ${theme.typography.fontFamily.poppins};
  `}
`

export const Button = styled(TextButton)`
  ${({ theme }: ThemeProps) => css`
    padding-left: ${theme.spacings.sm};
    padding-top: ${theme.spacings.lg};
  `}
`
