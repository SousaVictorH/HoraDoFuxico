import styled, { css } from "styled-components/native"

import { TermsModal as Modal } from "components/modals/termsModal"

import { ThemeProps } from "styles/types"

export const ContentWrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  ${({ theme }: ThemeProps) => css`
    padding-top: ${theme.spacings.paddingTop};
  `}
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
  height: 225px;
  width: 90%;
  min-width: 300px;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.xxl};
  `}
`

export const FormContainer = styled.View`
  flex: 1;
  width: 100%;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.xxxl};
    padding: ${theme.spacings.md} ${theme.spacings.xxl};
  `}
`

export const TermsModal = styled(Modal)`
  ${({ theme }: ThemeProps) => css`
    padding: ${theme.spacings.xxl} ${theme.spacings.xxl};
  `}
`
