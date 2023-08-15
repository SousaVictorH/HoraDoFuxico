import styled, { css } from 'styled-components/native'

import { ThemeProps } from 'styles/types'

export const ContentWrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.spacingTop};
  `}
`

export const ImageWrapper = styled.View`
  height: 35%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Image = styled.Image`
  width: 65%;
  height: 65%;
  max-height: 200px;
`

export const FormContainer = styled.View`
  width: 100%;
  height: 65%;
  min-height: 220px;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.auto};
    padding-bottom: ${theme.spacings.md};
    margin-bottom: ${theme.spacings.sm};
  `}
`
