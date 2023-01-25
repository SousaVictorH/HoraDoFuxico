import { ListRenderItemInfo } from "react-native"

import { HotTopic } from "components/hotTopic"
import { Props as HotTopicType } from "components/hotTopic/types"

import { hotTopics, schedule, emptyText } from "constants/texts"
import { hotTopicsList } from "resources/hotTopics"

import {
  Container,
  Title,
  ListWrapper,
  HotTopicsList,
  SchedulesList,
  TextButton,
  EmptyText
} from "./styles"
import { Props } from "./types"

export const Schedules = ({
  schedules
}: Props) => {
  return (
    <Container>
      <Title>{hotTopics}</Title>
      <ListWrapper>
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
      </ListWrapper>
      <Title>Horário dos fuxicos</Title>
      <SchedulesList
        data={schedules}
        renderItem={() => null}
        ListEmptyComponent={
          <EmptyText>{emptyText}</EmptyText>
        }
        ListFooterComponent={
          <TextButton
            onPress={() => console.log('ok')}
            text={schedule}
          />
        }
      />
    </Container>
  )
}