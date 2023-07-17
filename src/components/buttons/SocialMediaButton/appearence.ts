import { css } from 'styled-components';
import { ThemeType, SocialMediaAppearenceOptions } from 'styles/types';

type AppearanceProps = {
  theme: ThemeType;
  appearance: SocialMediaAppearenceOptions;
};

export function getButtonAppearance({ theme, appearance }: AppearanceProps) {
  const options: any = {
    Facebook: () => css`
      background-color: ${theme.colors.support.transparent};
    `,
    Google: () => css`
      background-color: ${theme.colors.support.transparent};
    `,
    Twitter: () => css`
      background-color: ${theme.colors.support.transparent};
    `,
  };

  return options[appearance];
}

export function getIconAppearance({ appearance }: AppearanceProps) {
  const options: any = {
    Facebook: () => css`
      height: 95%;
      width: 90%;
    `,
    Google: () => css`
      height: 90%;
      width: 85%;
    `,
    Twitter: () => css`
      height: 95%;
      width: 85%;
    `,
  };

  return options[appearance];
}
