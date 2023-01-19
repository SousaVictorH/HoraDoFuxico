
import styled, { css } from "styled-components/native"

import DatePicker from "@react-native-community/datetimepicker"

import { ThemeProps } from "styles/types"

export const Container = styled.TouchableOpacity`
  height: 55px;
  width: 100%;

  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.colors.technical.input_background};
    border-radius: ${theme.borderRadius.xxs};
    padding: ${theme.spacings.none} ${theme.spacings.lg};
  `}
`

export const DatePickerComponent = styled(DatePicker)`
  position: absolute;
  top: 10px;
  left: -20px;

  ${({ theme }: ThemeProps) => css`
    background-color: ${theme.colors.support.transparent};
    border-radius: ${theme.borderRadius.xxs};
    padding: ${theme.spacings.none} ${theme.spacings.lg};
  `}
`
