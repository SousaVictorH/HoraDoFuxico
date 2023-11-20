import styled, { css } from 'styled-components/native'

import { ThemeProps } from 'styles/types'

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.View`
  flex: 1;
  width: 100%;

  ${({ theme }: ThemeProps) => css`
    padding: ${theme.spacings.xlg};
  `}
`

export const LoadingIndicator = styled.ActivityIndicator.attrs({
  size: 'small'
})`
  flex: 1;

  ${({ theme }: ThemeProps) => css`
    margin-bottom: ${theme.spacings.lg};
  `}
`

export const ScheduleGroup = styled.View`
  flex-direction: row;

  ${({ theme }: ThemeProps) => css`
    margin-bottom: ${theme.spacings.xlg};
  `}
`

export const ScheduleCategory = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.caption.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.support.orange};
  `}
`

export const ScheduleValue = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.caption.fontSize};
    font-family: ${theme.typography.fontFamily.poppins};
    color: ${theme.colors.neutrals.neutral_60};
    margin-left: ${theme.spacings.md};
  `}
`

export const ScheduleParticipants = styled.View`
  ${({ theme }: ThemeProps) => css`
    margin-top: ${theme.spacings.xlg};
    margin-left: ${theme.spacings.lg};
  `}
`
