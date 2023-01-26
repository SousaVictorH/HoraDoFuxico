import { ListRenderItemInfo } from "react-native"

import { HotTopic } from "components/hotTopic"
import { Props as HotTopicType } from "components/hotTopic/types"
import { ScheduleItem } from "components/scheduleItem"

import { hotTopics, schedule, emptyText } from "constants/texts"
import { hotTopicsList } from "resources/hotTopics"
import { NEW_SCHEDULE_SCREEN } from "constants/screens"

import { Schedule } from "store/types"

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
  schedules,
  navigation
}: Props) => {
  const onNavigate = () => {
    navigation.navigate(NEW_SCHEDULE_SCREEN)
  }

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
        renderItem={({ item, index }: ListRenderItemInfo<Schedule>) => (
          <ScheduleItem
            key={index.toString()}
            {...item}
          />
        )}
        ListEmptyComponent={
          <EmptyText>{emptyText}</EmptyText>
        }
        ListFooterComponent={
          <TextButton
            onPress={() => onNavigate()}
            text={schedule}
          />
        }
      />
    </Container>
  )
}