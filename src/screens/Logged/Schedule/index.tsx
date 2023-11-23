import React, { useState, useEffect } from 'react'

import Toast from 'react-native-toast-message'

import { LoggedWrapper } from 'templates/LoggedWrapper'
import { HeaderButton } from 'components/buttons/Header'

import { details } from 'constants/texts'
import { PROFILE_SCREEN } from 'constants/screens'

import { useUserStore } from 'store/user'
import { useUserSchedulesStore } from 'store/userSchedules'

import { Schedule } from 'store/user/types'

import { ScheduleService } from 'services'

import {
  ContentWrapper,
  Wrapper,
  LoadingIndicator,
  ScheduleGroup,
  ScheduleCategory,
  ScheduleValue,
  ScheduleParticipants,
  UserItem,
  Button
} from './styles'
import { Props } from './types'

export const ScheduleScreen = ({
  navigation,
  route
}: Props) => {
  const { id } = route.params

  const userStore = useUserStore()
  const schedulesStore = useUserSchedulesStore()

  const [isLoading, setIsLoading] = useState(false)
  const [scheduleData, setScheduleData] = useState<Schedule | undefined>()

  const [isScheduled, setIsScheduled] = useState(userStore.schedules.includes(id))
  const [isScheduling, setIsScheduling] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    ScheduleService.loadSchedule(id)
      .then((response: any) => {
        setScheduleData(response.data)
      })
      .catch(() => {
        Toast.show({
          type: 'error',
          text1: 'Alerta',
          text2: 'Erro ao acessar detalhes do agendamento'
        })

        setTimeout(() => {
          navigation.goBack()
        }, 700)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  const formatDate = (scheduledDate = '') => {
    const date = new Date(scheduledDate)

    const ano = date.getFullYear()
    const mes = ('0' + (date.getMonth() + 1)).slice(-2)
    const dia = ('0' + date.getDate()).slice(-2)

    return `${dia} / ${mes} / ${ano}`
  }

  const formatHours = (scheduledDate = '') => {
    const date = new Date(scheduledDate)

    const hora = ('0' + date.getHours()).slice(-2)
    const minutos = ('0' + date.getMinutes()).slice(-2)

    return `${hora} : ${minutos}`
  }

  const handlePress = async () => {
    if (isScheduling) return

    setIsScheduling(true)

    if (isScheduled) {
      ScheduleService.cancelSchedule(id, userStore.id)
        .then(() => {
          setIsScheduled(false)

          userStore.setPersonalData({
            schedules: userStore.schedules.filter((scheduleId: string) => {
              return scheduleId !== id
            })
          })

          id && schedulesStore.removeSchedule(id)

          const data: any = scheduleData

          setScheduleData({
            ...data,
            users: data.users.filter((userData: any) => {
              return userData.id !== userStore.id
            })
          })
        })
        .catch(() => {
          Toast.show({
            type: 'error',
            text1: 'Alerta',
            text2: 'Erro ao cancelar agendamento'
          })
        })
        .finally(() => setIsScheduling(false))
    } else {
      ScheduleService.schedule(id, userStore.id)
        .then(() => {
          setIsScheduled(true)

          userStore.setPersonalData({
            schedules: [...userStore.schedules, id]
          })

          scheduleData && schedulesStore.addSchedule(scheduleData)

          const data: any = scheduleData

          setScheduleData({
            ...data,
            users: [...data.users, {
              id: userStore.id,
              name: userStore.name,
              avatar: userStore.avatar,
              birthDate: userStore.birthDate,
              phoneNumber: userStore.phoneNumber
            }]
          })
        })
        .catch(() => {
          Toast.show({
            type: 'error',
            text1: 'Alerta',
            text2: 'Erro ao fazer agendamento'
          })
        })
        .finally(() => setIsScheduling(false))
    }
  }

  const ListHeaderComponent = () => (
    <>
      <ScheduleGroup>
        <ScheduleCategory>Categoria:</ScheduleCategory>
        <ScheduleValue>{scheduleData?.category}</ScheduleValue>
      </ScheduleGroup>
      <ScheduleGroup>
        <ScheduleCategory>Data:</ScheduleCategory>
        <ScheduleValue>{formatDate(scheduleData?.date)}</ScheduleValue>
      </ScheduleGroup>
      <ScheduleGroup>
        <ScheduleCategory>Hora:</ScheduleCategory>
        <ScheduleValue>{formatHours(scheduleData?.date)}</ScheduleValue>
      </ScheduleGroup>
      <ScheduleCategory>Participantes:</ScheduleCategory>
    </>
  )

  return (
    <LoggedWrapper
      navigation={navigation}
      hideHeader
    >
      <Wrapper>
        <HeaderButton
          onPress={() => navigation.goBack()}
          text={details}
          textAlign='center'
        />
        {
          isLoading ? (<LoadingIndicator />) :
            (
              <ContentWrapper>
                <ScheduleParticipants
                  data={scheduleData?.users || []}
                  ListHeaderComponent={ListHeaderComponent}
                  renderItem={({ item }: any) => (
                    <UserItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      onPress={() => {
                        navigation.push(PROFILE_SCREEN, { ...item })
                      }}
                    />
                  )}
                />
                <Button
                  text={isScheduled ? 'Desmarcar' : 'Agendar'}
                  isLoading={isScheduling}
                  onPress={handlePress}
                />
              </ContentWrapper>
            )
        }
      </Wrapper>
    </LoggedWrapper>
  )
}
