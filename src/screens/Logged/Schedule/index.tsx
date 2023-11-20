import React, { useState, useEffect } from 'react'

import Toast from 'react-native-toast-message'

import { LoggedWrapper } from 'templates/LoggedWrapper'
import { HeaderButton } from 'components/buttons/Header'
import { UserItem } from 'components/items/userItem'

import { details } from 'constants/texts'
import { PROFILE_SCREEN } from 'constants/screens'

import { useUserStore } from 'store/user'
import { Schedule } from 'store/user/types'

import { ScheduleService } from 'services'

import {
  ContentWrapper,
  Wrapper,
  LoadingIndicator,
  ScheduleGroup,
  ScheduleCategory,
  ScheduleValue,
  ScheduleParticipants
} from './styles'
import { Props } from './types'

export const ScheduleScreen = ({
  navigation,
  route
}: Props) => {
  const { id } = route.params

  const userStore = useUserStore()

  const [isLoading, setIsLoading] = useState(false)
  const [scheduleData, setScheduleData] = useState<Schedule | undefined>()

  const scheduled = userStore.schedules.includes(id)

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
                <ScheduleGroup>
                  <ScheduleCategory>Participando:</ScheduleCategory>
                  <ScheduleValue>{scheduled ? 'True' : 'False'}</ScheduleValue>
                </ScheduleGroup>
                <ScheduleCategory>Participantes:</ScheduleCategory>
                <ScheduleParticipants>
                  {scheduleData?.users?.map((item: any) => (
                    <UserItem
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      onPress={() => {
                        navigation.push(PROFILE_SCREEN, { ...item })
                      }}
                    />
                  ))}
                </ScheduleParticipants>
              </ContentWrapper>
            )
        }
      </Wrapper>
    </LoggedWrapper>
  )
}
