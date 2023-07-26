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
  EmptyText,
  Spinner
} from "./styles"
import { Props } from "./types"

export const Schedules = ({
  schedules,
  navigation,
  onEndReachedThreshold,
  onEndReached,
  isLoading,
  isUserProfile,
  onSchedulePress
}: Props) => {
  const renderSchedules: ListRenderItem<any> = ({
    item,
    index
  }: any) => (
    <ScheduleItem
      key={index.toString()}
      {...item}
      onPress={onSchedulePress}
    />
  )

  return (
    <Container>
      <Title>Horário dos fuxicos</Title>
      <SchedulesList
        data={schedules}
        renderItem={renderSchedules}
        onEndReachedThreshold={onEndReachedThreshold}
        onEndReached={onEndReached}
        ListEmptyComponent={
          <>
            {!isLoading && <EmptyText>{emptyText}</EmptyText>}
          </>
        }
        ListFooterComponent={
          <>
            {isLoading && <Spinner />}
            {isUserProfile && (
              <TextButton
                onPress={() => navigation.navigate(NEW_SCHEDULE_SCREEN)}
                text={schedule}
              />
            )}
          </>
        }
      />
    </Container>
  )
}

Schedules.defaultProps = {
  onEndReachedThreshold: 0.6,
  isLoading: false,
  isUserProfile: true
}