import { StyleProp, ViewStyle } from 'react-native';
import { ImageSourcePropType } from 'react-native';

import { SocialMediaAppearenceOptions } from 'styles/types';

export interface SocialMediaButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  iconSource?: ImageSourcePropType;
  appearance: SocialMediaAppearenceOptions;
}

export interface SocialMediaButtonIconProps {
  source?: ImageSourcePropType;
  appearance: SocialMediaAppearenceOptions;
}
