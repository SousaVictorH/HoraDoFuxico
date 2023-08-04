import styled, { css } from 'styled-components/native';

import { ThemeProps } from 'styles/types';

import { getButtonAppearance, getIconAppearance } from './appearence';
import { SocialMediaButtonProps, SocialMediaButtonIconProps } from './types';

export const Container = styled.TouchableOpacity`
  height: 54px;
  width: 54px;
  align-items: center;
  justify-content: center;

  ${({ theme }: SocialMediaButtonProps & ThemeProps) => css`
    margin: ${theme.spacings.none} ${theme.spacings.sm};
    border-radius: ${theme.borderRadius.lg};
    ${getButtonAppearance}
  `}
`;

export const Image = styled.Image`
  ${({ }: SocialMediaButtonIconProps & ThemeProps) => css`
    ${getIconAppearance}
  `}
`;
