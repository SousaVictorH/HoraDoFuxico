import { Pressable } from "react-native"
import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;

  ${({ theme, textAlign }: ThemeProps & { textAlign: 'left' | 'center' }) => css`
    padding: ${theme.spacings.spacingTop} ${theme.spacings.xlg} ${theme.spacings.none};
    ${textAlign === 'center' && `justify-content: space-between;`}
  `}
`

export const IconWrapper = styled(Pressable)`
  width: 50px;
`

export const HeaderText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.heading.fontSize};
    font-family: ${theme.typography.fontFamily.baskervville};
  `}
`
