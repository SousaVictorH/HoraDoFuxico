import React from "react"
import { ListRenderItem } from "react-native"

import { ScheduleItem } from "components/items/scheduleItem"

import { schedule, emptyText } from "constants/texts"
import { NEW_SCHEDULE_SCREEN } from "constants/screens"

import {
  Container,
  Title,
  SchedulesList,
  TextButton,
  EmptyText
} from "./styles"
import { Props } from "./types"

export const Schedules = ({
  schedules,
  navigation
}: Props) => {
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