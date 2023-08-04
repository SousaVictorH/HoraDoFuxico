
import styled, { css } from "styled-components/native";

import { ThemeProps } from "styles/types";

export const InputsWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const AreaCodeInput = styled.TextInput`
  width: 60px;
  height: 50px;
  text-align: center;

  ${({ theme }: ThemeProps) => css`
    border-radius: ${theme.borderRadius.xxs};
    font-size: ${theme.typography.elements.caption.fontSize};
    background-color: ${theme.colors.technical.input_background};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.support.black};
  `}
`

export const PhoneNumberInput = styled.TextInput`
  width: 80%;
  height: 50px;
  text-align: left;
  
  ${({ theme }: ThemeProps) => css`
    border-radius: ${theme.borderRadius.xxs};
    font-size: ${theme.typography.elements.caption.fontSize};
    padding: 0 ${theme.spacings.lg};
    background-color: ${theme.colors.technical.input_background};
    color: ${theme.colors.support.black};
    font-family: ${theme.typography.fontFamily.poppins};
  `}
`
