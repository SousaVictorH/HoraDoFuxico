import { css } from 'styled-components';
import { ThemeType } from 'styles/types';

import { PopUpTypes } from 'store/popUp/types';

type AppearanceProps = {
  theme: ThemeType;
  type?: PopUpTypes;
};

export function getAppearence({ theme, type }: AppearanceProps) {
  const options: any = {
    SUCCESS: () => css`
      background-color: ${theme.colors.technical.success_background};
    `,
    WARNING: () => css`
      background-color: ${theme.colors.technical.problem_background};
    `,
    INFO: () => css`
      background-color: ${theme.colors.support.blue_50};
    `
  };

  if (!type) return ''

  return options[String(type)];
}
