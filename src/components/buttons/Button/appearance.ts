import { css } from 'styled-components';
import { ThemeType, AppearanceOptions } from 'styles/types';

type AppearanceProps = {
  theme: ThemeType;
  appearance?: AppearanceOptions;
};

export function getButtonAppearance({ theme, appearance }: AppearanceProps) {
  const options: any = {
    primary: () => css`
      background-color: ${theme.colors.support.orange};
      border: 1px solid ${theme.colors.support.orange};
    `,
    secondary: () => css`
      background-color: ${theme.colors.support.darkBlue};
      border: 1px solid ${theme.colors.support.darkBlue};
    `,
  };

  if (!appearance) return ''

  return options[appearance];
}

export function getTextAppearance({ theme, appearance }: AppearanceProps) {
  const options: any = {
    primary: () => css`
      color: ${theme.colors.support.white};
    `,
    secondary: () => css`
      color: ${theme.colors.support.white};
    `,
  };

  if (!appearance) return ''

  return options[appearance];
}
