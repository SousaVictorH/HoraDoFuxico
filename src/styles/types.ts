export type BrandColors = {
  reflex_blue: string;
};

export type BackgroundColors = {
  dark: string;
  light: string;
  offLight: string;
};

export type NeutralsColors = {
  black: string;
  neutral_80: string;
  neutral_60: string;
  neutral_40: string;
  neutral_20: string;
  neutral_10: string;
  white: string;
};

export type SupportColors = {
  black: string;
  darkBlue: string;
  blue: string;
  blue_50: string;
  blue_10: string;
  beige: string;
  beige_50: string;
  beige_10: string;
  white: string;
  transparent: string;
  modalBackground: string;
  purple: string;
  orange: string;
  lightOrange: string;
};

export type TechnicalColors = {
  link: string;
  focus_background: string;
  success_text: string;
  success_spotlight: string;
  success_background: string;
  alert_text: string;
  alert_spotlight: string;
  alert_background: string;
  problem_text: string;
  problem_spotlight: string;
  problem_background: string;
  input_text: string,
  input_background: string,
};

type ColorsType = {
  background: BackgroundColors;
  neutrals: NeutralsColors;
  support: SupportColors;
  technical: TechnicalColors;
};

export type AppearanceOptions =
  | 'disabled'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'ghost'
  | 'danger';

export type SocialMediaAppearenceOptions = 'Facebook' | 'Google' | 'Twitter';

export type ButtonTextAppearanceOptions =
  | 'primary'
  | 'secondary'

export type FontFamilyRules = {
  poppins: string
  poppinsBold: string
  baskervville: string
}

export type TypographyWeights = 'normal' | 'bold' | '100px' | '200px' | '300px' | '400px' | '500px' | '600px' | '700px';

type TypographyElementProps = {
  fontSize: string;
  fontWeight?: TypographyWeights;
  lineHeight?: string;
  textDecoration?: string;
};

export type ElementOptions = 'heading' | 'body' | 'secondary' | 'caption';

export type TypographyType = {
  fontFamily: FontFamilyRules;
  elements: FontSizeRules;
};

export type FontSizeRules = {
  heading: TypographyElementProps;
  body: TypographyElementProps;
  secondary: TypographyElementProps;
  caption: TypographyElementProps;
};

export type BorderRadiusType = {
  none: string;
  xxs: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xlg: string;
};

export type SpacingsTypes = {
  none: string;
  xxs: string;
  xs: string;
  s: string;
  sm: string;
  md: string;
  lg: string;
  xlg: string;
  xxl: string;
  xxxl: string;
  xxxxl: string;
  auto: string;
  paddingTop: string;
};

export type BreakPointsTypes = {
  sm: number;
  lg: number;
};

export interface ThemeType {
  colors: ColorsType;
  typography: TypographyType;
  borderRadius: BorderRadiusType;
  spacings: SpacingsTypes;
}

export type ThemeProps = {
  theme: ThemeType;
};
