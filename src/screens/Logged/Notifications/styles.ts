import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"

export const Wrapper = styled.View`
  width: 100%;
`

export const ContentWrapper = styled.View`
  flex: 1;
  
  ${({ theme }: ThemeProps) => css`
    padding: ${theme.spacings.none} ${theme.spacings.xlg}
  `}
`

export const NotificationsText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.caption.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.neutrals.neutral_60};
  `}
`
