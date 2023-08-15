import React from 'react'
import { ListRenderItem } from 'react-native'

import { HotTopic } from 'components/items/hotTopic'

import { hotTopics } from 'constants/texts'
import { hotTopicsList } from 'resources/hotTopics'

import {
  Container,
  Title,
  ListWrapper,
  HotTopicsList
} from './styles'

export const HotTopics = () => {
  const renderHotTopics: ListRenderItem<any> = ({
    item,
    index
  }) => (
    <HotTopic
      key={index.toString()}
      {...item}
    />
  )

  return (
    <Container>
      <Title>{hotTopics}</Title>
      <ListWrapper>
        <HotTopicsList
          data={hotTopicsList}
          horizontal
          renderItem={renderHotTopics}
        />
      </ListWrapper>
    </Container>
  )
}
