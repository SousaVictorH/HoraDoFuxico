import { StyleProp, ViewStyle } from 'react-native'
import { SpacingsTypes, AppearanceOptions } from 'styles/types'

export type ButtonProps = {
  onPress: () => void;
  appearance?: AppearanceOptions;
  text?: string;
  style?: StyleProp<ViewStyle>;
  marginBottom: keyof SpacingsTypes;
  marginTop: keyof SpacingsTypes;
  height: number;
  disabled?: boolean
  isLoading?: boolean
};

export type ButtonWrapperProps = Pick<
  ButtonProps,
  'appearance' | 'onPress' | 'marginBottom' | 'marginTop' | 'height'
> & {
  onPress: () => void;
  activeOpacity: number;
};

export type TextProps = {
  appearance?: AppearanceOptions
}

export type ButtonTextProps = Pick<ButtonProps, 'appearance'>;
