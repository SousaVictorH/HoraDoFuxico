import { css } from 'styled-components'
import { ThemeType, AppearanceOptions } from 'styles/types'

type AppearanceProps = {
  theme: ThemeType;
  appearance?: AppearanceOptions;
};

export function getTextAppearance({ theme, appearance }: AppearanceProps) {
  const options: any = {
    primary: () => css`
      color: ${theme.colors.support.orange}
    `,
    secondary: () => css`
      color: ${theme.colors.support.darkBlue};
      font-size: ${theme.typography.elements.body.fontSize};
      line-height: ${theme.typography.elements.body.lineHeight};
    `,
  }

  if (!appearance) return ''

  return options[appearance]
}
