import styled, { css } from "styled-components/native"
import { ThemeProps } from "styles/types"

export const TextInput = styled.TextInput`
  height: 55px;
  width: 100%;
  justify-content: center;
  align-items: center;

  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.caption.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.support.black};
    background-color: ${theme.colors.technical.input_background};
    border-radius: ${theme.borderRadius.xxs};
  `}
`
