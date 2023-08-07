import styled, { css } from "styled-components/native"

import { TermsModal as Modal } from "components/modals/termsModal"

import { ThemeProps } from "styles/types"

export const ContentWrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.spacingTop};
  `}
`

export const AppNameImage = styled.Image`
  width: 180px;
  height: 30px;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.md};
  `}
`

export const SubTitle = styled.Text`
  text-align: center;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.lg};
    font-size: ${theme.typography.elements.heading.fontSize};
    line-height: ${theme.typography.elements.heading.lineHeight};
    font-family: ${theme.typography.fontFamily.baskervville};
  `}
`

export const AppImageContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;

  ${({ theme }: ThemeProps) => css`
    margin-vertical: ${theme.spacings.lg};
  `}
`

export const AppImage = styled.Image`
  width: 95%;
  height: 95%;
`

export const FormContainer = styled.View`
  height: 30%;
  width: 100%;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.auto};
    padding: ${theme.spacings.md} ${theme.spacings.xxl};
  `}
`

export const TermsModal = styled(Modal)`
  ${({ theme }: ThemeProps) => css`
    padding: ${theme.spacings.xxl} ${theme.spacings.xxl};
  `}
`
