
import styled, { css } from 'styled-components/native'

import { BottomSheetScrollView } from '@gorhom/bottom-sheet'

import { ThemeProps } from 'styles/types'

export const Container = styled(BottomSheetScrollView)`
  flex: 1;
`

export const Title = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.heading.fontSize};
    line-height: ${theme.typography.elements.heading.lineHeight};
    font-family: ${theme.typography.fontFamily.baskervville};
    margin-bottom: ${theme.spacings.xxl};
    color: ${theme.colors.support.black};
  `}
`

export const SectionTitle = styled.Text`
  letter-spacing: 0.8px;

  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    line-height: ${theme.typography.elements.body.lineHeight};
    font-family: ${theme.typography.fontFamily.poppinsBold};
    margin-bottom: ${theme.spacings.xlg};
    color: ${theme.colors.support.black};
  `}
`

export const SectionDescription = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    line-height: ${theme.typography.elements.body.lineHeight};
    font-family: ${theme.typography.fontFamily.poppins};
    margin-bottom: ${theme.spacings.xlg};
    color: ${theme.colors.neutrals.neutral_80};
  `}
`

export const Footer = styled.View`
  ${({ theme }: ThemeProps) => css`
    padding: ${theme.spacings.lg};
  `}
`
