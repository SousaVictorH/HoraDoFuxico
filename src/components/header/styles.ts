import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"

export const Container = styled.View`
  width: 100%;
  
  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.colors.support.orange};
    padding-top: ${theme.spacings.md};
  `}
`

export const ContentWrapper = styled.View`
  width: 100%;
  align-items: center;
  height: 50px;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.spacingTop};
  `}
`

export const AppNameImage = styled.Image`
  width: 180px;
  height: 30px;
`

export const Button = styled.TouchableOpacity`
  position: absolute;
  left: 15px;
`
