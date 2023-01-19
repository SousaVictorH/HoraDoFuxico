
import styled, { css } from "styled-components/native"

import { Button } from 'components/buttons/Button'
import { Input as InputComponent } from "components/inputs/Input"
import { PhotoInput as PhotoInputComponent } from "components/inputs/PhotoInput"


import { ThemeProps } from "styles/types"

export const ContentWrapper = styled.View`
  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.xxxl};
    padding: ${theme.spacings.none} ${theme.spacings.xxl};
  `}
`

export const Input = styled(InputComponent)`
  border-width: 1px;

  ${({ theme }: ThemeProps) => css`
    margin-bottom: ${theme.spacings.lg};
    background-color: ${theme.colors.support.transparent};
    border-color: ${theme.colors.neutrals.neutral_10};
  `}
`

export const PhotoInput = styled(PhotoInputComponent)`
  ${({ theme }: ThemeProps) => css`
    margin-bottom: ${theme.spacings.md};
  `}
`

export const FormButton = styled(Button)`
  width: 100%;
  height: 60px;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.xxxl};
  `}
`
