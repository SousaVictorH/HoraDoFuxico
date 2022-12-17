
import styled, { css } from "styled-components/native";

import { ThemeProps } from "../../../styles/types";

export const InputsWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.md};
  `}
`

export const LeftInput = styled.TextInput`
  background-color: #E7E9EE;
  width: 60px;
  height: 50px;
  text-align: center;

  ${({ theme }: ThemeProps) => css`
    border-radius: ${theme.borderRadius.xxs};
    font-size: ${theme.typography.elements.caption.fontSize};
  `}
`

export const RightInput = styled.TextInput`
  background-color: #E7E9EE;
  width: 80%;
  height: 50px;
  text-align: left;
  
  ${({ theme }: ThemeProps) => css`
    border-radius: ${theme.borderRadius.xxs};
    font-size: ${theme.typography.elements.caption.fontSize};
    padding: 0 ${theme.spacings.lg};
  `}
`
