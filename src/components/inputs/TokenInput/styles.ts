import { Animated } from 'react-native';
import styled, { css } from 'styled-components/native';

import { ThemeProps } from 'styles/types';

export const Container = styled(Animated.View)`
  height: 55px;
  width: 100%;
  max-width: 360px;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  
  ${({ theme }: ThemeProps) => css`
    padding: ${theme.spacings.none} ${theme.spacings.sm};
    margin-top: ${theme.spacings.lg};
  `}
`;
