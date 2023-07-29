import styled, { css } from "styled-components/native"

import { getWindowHeight } from "utils/dimensions"

import { ThemeProps } from "styles/types"

export const Wrapper = styled.View`
  width: 100%;
  height: ${getWindowHeight()}px;
`

export const ContentWrapper = styled.View`
  flex: 1;
  
  ${({ theme }: ThemeProps) => css`
    padding: ${theme.spacings.none} ${theme.spacings.xlg}
  `}
`

export const ScheduleCategory = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.caption.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.neutrals.neutral_60};
  `}
`
