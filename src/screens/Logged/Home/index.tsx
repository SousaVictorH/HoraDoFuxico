import React from 'react'

import { LoggedWrapper } from 'templates/LoggedWrapper'

import { useUserStore } from 'store/user'

import { Header, HeaderText, ContentWrapper } from './styles'
import { Props } from "./types"
import { HotTopics } from 'components/hotTopics'

export const HomeScreen = ({
  toggleSidePanel
}: Props) => {
  const { name } = useUserStore()

  return (
    <LoggedWrapper toggleSidePanel={toggleSidePanel}>
      <ContentWrapper>
        <Header>
          <HeaderText>Olá, {name}.</HeaderText>
        </Header>
        <HotTopics />
      </ContentWrapper>
    </LoggedWrapper>
  )
}