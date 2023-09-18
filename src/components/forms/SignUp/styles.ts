import styled, { css } from 'styled-components/native'

import { Button } from 'components/buttons/Button'
import { Input as InputComponent } from 'components/inputs/Input'
import { PhotoInput as PhotoInputComponent } from 'components/inputs/PhotoInput'
import { DateTimeInput as DateTimeInputComponent } from 'components/inputs/DateTimeInput'

import { ThemeProps } from 'styles/types'

export const ContentWrapper = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;

  ${({ theme }: ThemeProps) => css`
    padding-horizontal: ${theme.spacings.xxl};
  `}
`

export const InputWrapper = styled.View``

export const Input = styled(InputComponent)`
  border-width: 1px;

  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.colors.support.transparent};
    border-color: ${theme.colors.neutrals.neutral_10};
    margin-bottom: ${theme.spacings.xlg};
  `}
`

export const InputCaption = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    font-family: ${theme.typography.fontFamily.poppinsBold};
    color: ${theme.colors.neutrals.neutral_60};
    margin-bottom: ${theme.spacings.sm};
  `}
`

export const PhotoInput = styled(PhotoInputComponent)`
  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.xlg};
  `}
`

export const FormButton = styled(Button)`
  width: 100%;
  height: 60px;

  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.xxl};
  `}
`

export const DateTimeInput = styled(DateTimeInputComponent)``
