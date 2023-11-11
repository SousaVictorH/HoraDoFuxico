import styled, { css } from 'styled-components/native'

import { ThemeProps } from 'styles/types'

export const Container = styled.View`
  flex: 1;

  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.colors.support.orange};
    padding: ${theme.spacings.xxxl} ${theme.spacings.none};
  `}
`

export const ItemContainer = styled.Pressable`
  align-items: center;
  flex-direction: row;

  ${({ theme }: ThemeProps) => css`
    margin: ${theme.spacings.lg} ${theme.spacings.lg};
    border-radius: ${theme.borderRadius.xxs};
  `}
`

export const ItemLabel = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.caption.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.support.white};
    margin-left: ${theme.spacings.md};
  `}
`

export const FooterItemContainer = styled(ItemContainer)`
  margin-top: auto;
`
