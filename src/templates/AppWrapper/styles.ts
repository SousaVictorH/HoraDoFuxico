import styled from 'styled-components/native';
import { ThemeProps } from 'styles/types';

export const Container = styled.View`
  background-color: ${({ theme }: ThemeProps) => theme.colors.background.light};
  width: 100%;
  min-height: 100%;
  flex: 1;
`;
