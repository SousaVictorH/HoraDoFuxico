
import styled, { css } from "styled-components/native";

import { ThemeProps } from "styles/types";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.heading.fontSize};
    font-weigth: ${theme.typography.elements.heading.fontWeight};
    line-height: ${theme.typography.elements.heading.lineHeight};
    font-family: ${theme.typography.fontFamily.normal};
    margin-bottom: ${theme.spacings.xxl};
    color: ${theme.colors.support.black};
  `}
`

export const SectionTitle = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    font-weigth: ${theme.typography.elements.body.fontWeight};
    line-height: ${theme.typography.elements.body.lineHeight};
    font-family: ${theme.typography.fontFamily.normal};
    margin-bottom: ${theme.spacings.xlg};
    color: ${theme.colors.support.black};
  `}
`

export const SectionDescription = styled.Text`
  ${({ theme }: ThemeProps) => css`
    font-size: ${theme.typography.elements.body.fontSize};
    font-weigth: ${theme.typography.elements.body.fontWeight};
    line-height: ${theme.typography.elements.body.lineHeight};
    font-family: ${theme.typography.fontFamily.normal};
    margin-bottom: ${theme.spacings.xlg};
    color: ${theme.colors.neutrals.neutral_80};
  `}
`
