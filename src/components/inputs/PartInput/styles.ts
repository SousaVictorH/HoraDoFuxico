

import styled, { css } from 'styled-components/native';

import { ThemeProps } from 'styles/types';

export const Input = styled.TextInput`
  height: 48px;
  width: 48px;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.colors.technical.input_background};
    border-radius: ${theme.borderRadius.xxs};
    font-size: ${theme.typography.elements.caption.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.support.black};
  `}
`
