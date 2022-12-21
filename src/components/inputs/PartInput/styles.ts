

import styled, { css } from 'styled-components/native';

import { ThemeProps } from 'styles/types';

export const InputWrapper = styled.View`
  height: 48px;
  width: 48px;
  justify-content: center;
  align-items: center;
  
  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.colors.technical.input_background};
    border-radius: ${theme.borderRadius.xxs};
  `}
`;

export const Input = styled.TextInput`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.caption.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.support.black};
  `}
`
