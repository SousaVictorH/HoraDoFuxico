import React, { useState, useEffect } from "react"
import { ListRenderItem } from "react-native"

import Toast from "react-native-toast-message"

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
  onSchedulePress,
  setSchedules,
  loadUserSchedules,
  showButton
}: Props) => {
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(2)

  const [isLoading, setIsLoading] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const loadSchedules = async (pageNumber: number, shouldRefresh?: boolean) => {
    if (isLoading || (pageNumber > numberOfPages)) return

    setIsLoading(true)
    const response = await loadUserSchedules(pageNumber)
    setIsLoading(false)

    if (response.error) {
      return Toast.show({
        type: 'error',
        text1: 'Alerta',
        text2: 'Algo deu errado...'
      })
    }

    setPage(pageNumber + 1)
    setNumberOfPages(response.data.numberOfPages || 1)

    setSchedules(shouldRefresh ? [...response.data.schedules] : [...schedules, ...response.data.schedules])
  }

  const refreshList = async () => {
    setIsRefreshing(true)

    setSchedules([])
    await loadSchedules(1, true);

    setIsRefreshing(false)
  };

  useEffect(() => {
    loadSchedules(page, false)
  }, [])

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

  const renderListEmptyComponent = () => (
    <>
      {!isLoading && <EmptyText>{emptyText}</EmptyText>}
    </>
  )

  const renderFooterComponent = () => (
    <>
      {(isLoading && !isRefreshing) && <Spinner />}
      {showButton && (
        <TextButton
          onPress={() => navigation.navigate(NEW_SCHEDULE_SCREEN)}
          text={schedule}
        />
      )}
    </>
  )

  return (
    <Container>
      <Title>Horário dos fuxicos</Title>
      <SchedulesList
        data={schedules}
        renderItem={renderSchedules}
        onRefresh={refreshList}
        refreshing={isRefreshing}
        onEndReachedThreshold={0.6}
        onEndReached={() => loadSchedules(page)}
        showsVerticalScrollIndicator={false}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 10,
        }}
        ListEmptyComponent={renderListEmptyComponent()}
        ListFooterComponent={renderFooterComponent()}
      />
    </Container>
  )
}
