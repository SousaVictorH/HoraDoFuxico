import styled, { css } from "styled-components/native"

import { ThemeProps } from "styles/types"

export const ContentWrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 70px;
`

export const AppNameImage = styled.Image`
  width: 180px;
  height: 30px;
`

export const SubTitle = styled.Text`
  text-align: center;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.xxxl};
    margin-bottom: ${theme.spacings.xxl};
    font-size: ${theme.typography.elements.heading.fontSize};
    line-height: ${theme.typography.elements.heading.lineHeight};
    font-family: ${theme.typography.fontFamily.baskervville};
  `}
`

export const AppImage = styled.Image`
  height: 272px;
  width: 272px;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.xlg};
  `}
`

export const FormContainer = styled.View`
  flex: 1;
  width: 100%;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.xxxl};
    padding: ${theme.spacings.none} ${theme.spacings.xxl};
  `}
`
