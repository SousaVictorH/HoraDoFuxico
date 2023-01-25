import { ListRenderItemInfo } from "react-native"

import { HotTopic } from "components/hotTopic"
import { Props as HotTopicType } from "components/hotTopic/types"

import { hotTopics } from "constants/texts"
import { hotTopicsList } from "resources/hotTopics"

import {
  Container,
  Title,
  HotTopicsList
} from "./styles"
import { Props } from "./types"

export const Schedules = ({

}: Props) => {
  return (
    <Container>
      <Title>{hotTopics}</Title>
      <HotTopicsList
        data={hotTopicsList}
        horizontal
        renderItem={({ item, index }: ListRenderItemInfo<HotTopicType>) => (
          <HotTopic
            key={index.toString()}
            {...item}
          />
        )}
      />
    </Container>
  )
}