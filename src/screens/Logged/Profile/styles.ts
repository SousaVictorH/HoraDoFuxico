import { Pressable } from "react-native"
import styled, { css } from "styled-components/native"

import { Schedules } from 'components/schedules'

import { getWindowHeight } from "utils/dimensions"

import { ThemeProps } from "styles/types"

export const Wrapper = styled.View`
  width: 100%;
  height: ${getWindowHeight()}px;
`

export const Header = styled.View`
  align-items: center;
  justify-content: center;

  ${({ theme }: ThemeProps) => css`
    padding: 55px ${theme.spacings.xxl} ${theme.spacings.xxxl};
  `}
`

export const IconWrapper = styled(Pressable)`
  position: absolute;
  left: 20px;
  width: 80px;
`

export const HeaderText = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.heading.fontSize};
    font-family: ${theme.typography.fontFamily.baskervville};
  `}
`

export const ContentWrapper = styled.View`
  flex: 1;
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
    margin-top: -${theme.spacings.xlg};
    margin-bottom: ${theme.spacings.md};
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
