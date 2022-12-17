import styled, { css } from "styled-components/native"

import { ThemeProps } from "../../styles/types"

export const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;

  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.colors.background.offLight};
  `}
`

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1 },
})``;

export const Container = styled.View`
  min-height: 100%;
  min-width: 100%;
`;
