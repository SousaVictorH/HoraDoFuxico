import styled, { css } from 'styled-components/native'

import BottomSheet from '@gorhom/bottom-sheet'

import { ThemeProps } from 'styles/types'

export const BottomSheetComponent = styled(BottomSheet)`
  ${({ theme }: ThemeProps) => css`
    shadow-color: ${theme.colors.support.black};
    shadow-opacity: 0.2;
  `}
`
