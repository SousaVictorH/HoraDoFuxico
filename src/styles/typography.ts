import { FontFamilyRules, FontSizeRules } from './types'

export const fontFamily: FontFamilyRules = {
  poppins: 'Poppins',
  poppinsBold: 'PoppinsBold',
  baskervville: 'Baskervville'
}

export const elements: FontSizeRules = {
  heading: {
    fontSize: '24px',
    lineHeight: '32px'
  },
  body: {
    fontSize: '16px',
    lineHeight: '21px'
  },
  secondary: {
    fontSize: '12px',
    lineHeight: '14px'
  },
  caption: {
    fontSize: '18px',
    fontWeight: 'normal',
  },
}
