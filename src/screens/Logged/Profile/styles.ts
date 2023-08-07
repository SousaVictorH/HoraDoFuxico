import styled, { css } from "styled-components/native"

import { Schedules } from 'components/schedules'

import { ThemeProps } from "styles/types"

import { getWindowHeight, getWindowWidth } from "utils/dimensions"

export const Wrapper = styled.View`
  flex: 1;
  width: ${getWindowWidth()}px;
  height: ${getWindowHeight()}px;
`

export const ProfileWrapper = styled.View`
  width: 100%;
  align-items: center;
`

export const UserImage = styled.Image`
  width: 143px;
  height: 143px;
  border-radius: 100%;
  border-width: 5px;

  ${({ theme }: ThemeProps) => css`
    border-color: ${theme.colors.background.offLight};
  `}
`

export const UserName = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.caption.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.neutrals.neutral_60};
  `}
`

export const SchedulesList = styled(Schedules)`
  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.xxl};
  `}
`
