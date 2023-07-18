import styled, { css } from 'styled-components/native';

import { ThemeProps } from 'styles/types';

export const Container = styled.TouchableOpacity`
  height: 20px;
  align-items: center;
  flex-direction: row;
`;

export const Radio = styled.View`
  height: 24px;
  width: 24px;
  justify-content: center;
  align-items: center;

  ${({ theme, active }: ThemeProps & { active: boolean }) => css`
    border: 2px solid ${active ? theme.colors.support.orange : theme.colors.neutrals.neutral_20};
    background-color: ${active ? theme.colors.support.orange : theme.colors.support.transparent};
    border-radius: ${theme.borderRadius.xlg};
  `}
`

export const RadioInner = styled.View`
  height: 12px;
  width: 12px;

  ${({ theme }: ThemeProps) => css`
    border-radius: ${theme.borderRadius.xlg};
    background-color: ${theme.colors.background.offLight};
  `}
`

export const Text = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    line-height: ${theme.typography.elements.body.lineHeight};
    font-family: ${theme.typography.fontFamily.poppins};
    margin-left: ${theme.spacings.md};
  `}
`
