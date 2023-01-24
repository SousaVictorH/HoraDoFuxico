import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"

export const Container = styled.View`
  height: 130px;
  width: 100%;
  align-items: center;
  justify-content: center;
  
  ${({ theme }: ThemeProps) => css`
    padding-top: ${theme.spacings.lg};
    background-color: ${theme.colors.support.orange};
  `}
`

export const AppNameImage = styled.Image`
  width: 180px;
  height: 30px;
`

export const Button = styled.TouchableOpacity`
  position: absolute;
  left: 25px;
  top: 57.5%;
`

export const ButtonIcon = styled.Image`
  height: 17px;
  width: 18px;
`
