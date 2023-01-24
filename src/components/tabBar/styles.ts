import styled, { css } from "styled-components/native"
import { ThemeProps } from "styles/types"

export const TabBarContainer = styled.View`
  flex-direction: row;
  height: 85px;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.colors.support.orange};
  `}
`

export const ItemContainer = styled.Pressable``
