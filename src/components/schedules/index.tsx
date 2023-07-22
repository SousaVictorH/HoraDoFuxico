import React from "react"
import { ListRenderItem } from "react-native"

import { HotTopic } from "components/items/hotTopic"
import { ScheduleItem } from "components/items/scheduleItem"

import { hotTopics, schedule, emptyText } from "constants/texts"
import { hotTopicsList } from "resources/hotTopics"
import { NEW_SCHEDULE_SCREEN } from "constants/screens"

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
  const renderHotTopics: ListRenderItem<any> = ({
    item,
    index
  }) => (
    <HotTopic
      key={index.toString()}
      {...item}
    />
  )

  const renderSchedules: ListRenderItem<any> = ({
    item,
    index
  }: any) => (
    <ScheduleItem
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
      <Title>Horário dos fuxicos</Title>
      <SchedulesList
        data={schedules}
        renderItem={renderSchedules}
        ListEmptyComponent={<EmptyText>{emptyText}</EmptyText>}
        ListFooterComponent={
          <TextButton
            onPress={() => navigation.navigate(NEW_SCHEDULE_SCREEN)}
            text={schedule}
          />
        }
      />
    </Container>
  )
}