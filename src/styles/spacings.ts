import { SpacingsTypes } from './types';

import { getWindowHeight } from 'utils/dimensions';

const paddingTop = getWindowHeight() > 900 ? 95 : 70;

export const spacings: SpacingsTypes = {
  none: '0px',
  xxs: '2px',
  xs: '4px',
  s: '6px',
  sm: '8px',
  md: '12px',
  lg: '18px',
  xlg: '20px',
  xxl: '30px',
  xxxl: '50px',
  xxxxl: '80px',
  auto: 'auto',
  paddingTop: `${paddingTop}px`
};
