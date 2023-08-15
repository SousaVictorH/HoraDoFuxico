import React from 'react'

import { LoggedWrapper } from 'templates/LoggedWrapper'
import { HeaderButton } from 'components/buttons/Header'

import { help, helpText } from 'constants/texts'

import {
  ContentWrapper,
  Wrapper,
  HelpText
} from './styles'
import { Props } from './types'

export const HelpScreen = ({
  navigation
}: Props) => {
  return (
    <LoggedWrapper hideHeader>
      <Wrapper>
        <HeaderButton
          onPress={() => navigation.goBack()}
          text={help}
        />
        <ContentWrapper>
          <HelpText>{helpText}</HelpText>
        </ContentWrapper>
      </Wrapper>
    </LoggedWrapper>
  )
}
