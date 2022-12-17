import { ThemeType } from './types';

import { fontFamily, elements } from './typography';
import { spacings } from './spacings';
import { borderRadius } from './border';
import {
  neutralColors,
  supportColors,
  technicalColors,
  backgroundColors,
} from './colors';

const Theme: ThemeType = {
  colors: {
    background: backgroundColors,
    neutrals: neutralColors,
    support: supportColors,
    technical: technicalColors,
  },
  typography: {
    fontFamily,
    elements
  },
  borderRadius,
  spacings,
};

export default Theme;
