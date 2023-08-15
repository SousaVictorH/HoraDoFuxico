import styled, { css } from 'styled-components/native'
import { ThemeProps } from 'styles/types'

export const TabBarContainer = styled.View`
  flex-direction: row;
  min-height: 70px;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.colors.support.orange};
    padding-top: ${theme.spacings.lg};
    padding-bottom: ${theme.spacings.spacingBottom}
  `}
`

export const ItemContainer = styled.Pressable``
