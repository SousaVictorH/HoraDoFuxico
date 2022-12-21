import styled, { css } from 'styled-components/native';

import { ThemeProps } from 'styles/types';

export const Container = styled.View`
  height: 20px;
  width: 100%;
  align-items: center;
  flex-direction: row;
`;

export const Radio = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  justify-content: center;
  align-items: center;

  ${({ theme }: ThemeProps) => css`
    border: 2px solid ${theme.colors.neutrals.neutral_20};
    border-radius: ${theme.borderRadius.xlg};
  `}
`

export const RadioInner = styled.View`
  height: 15px;
  width: 15px;

  ${({ theme }: ThemeProps) => css`
    border-radius: ${theme.borderRadius.xlg};
    background-color: ${theme.colors.neutrals.neutral_20};
  `}
`

export const Text = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    font-weigth: ${theme.typography.elements.body.fontWeight};
    line-height: ${theme.typography.elements.body.lineHeight};
    font-family: ${theme.typography.fontFamily.poppins};
    margin-left: ${theme.spacings.md};
  `}
`
