import React, { useEffect, useState } from 'react'
import { ListRenderItem } from 'react-native'

import Toast from 'react-native-toast-message'

import { AxiosResponse } from 'axios'
import { UserService } from 'services/UserService'

import { LoggedWrapper } from 'templates/LoggedWrapper'
import { UserItem } from 'components/items/userItem'
import { SearchInput } from 'components/inputs/SearchInput'

import { PROFILE_SCREEN } from 'constants/screens'

import { User } from 'store/user/types'

import { useDebounce } from 'utils/useDebounce'

import {
  ContentWrapper,
  List,
  Header,
  Spinner
} from './styles'
import { Props } from './types'

export const SearchScreen = ({
  navigation
}: Props) => {
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(2)

  const [isLoading, setIsLoading] = useState(false)
  const [showSpinner, setShowSpinner] = useState(true)

  const [searchFieldDisplayValue, setSearchFieldDisplayValues] = useState('')
  const [searchField, setSearchField] = useState('')

  const [usersList, setUsersList] = useState<User[]>([])
  const debounceChange = useDebounce(setSearchField, 500)

  const loadUsersList = async (pageNumber: number) => {
    if (isLoading || (pageNumber > numberOfPages)) return

    setIsLoading(true)

    UserService.getUsers(searchField, pageNumber)
      .then((response: AxiosResponse) => {
        setPage(pageNumber + 1)
        setNumberOfPages(response.data.numberOfPages)
        setUsersList([...usersList, ...response.data.users])
      })
      .catch(() => {
        Toast.show({
          type: 'error',
          text1: 'Alerta',
          text2: 'Algo deu errado...'
        })
      })
      .finally(() => {
        setIsLoading(false)
        setShowSpinner(false)
      })
  }

  useEffect(() => {
    loadUsersList(1)
  }, [searchField])

  const renderItem: ListRenderItem<any> = ({ item }:
    {
      item: {
        id: string
        name: string
        phoneNumber: string
        birthDate: string
        avatar?: string
      }
    }) => (
    <UserItem
      key={item.id}
      {...item}
      onPress={() => navigation.navigate(PROFILE_SCREEN, { ...item })}
    />
  )

  const renderListFooterComponent = () => (
    <>
      {(isLoading || showSpinner) && <Spinner />}
    </>
  )

  return (
    <LoggedWrapper navigation={navigation}>
      <ContentWrapper>
        <Header>
          <SearchInput
            value={searchFieldDisplayValue}
            onChangeText={t => {
              setSearchFieldDisplayValues(t)
              debounceChange(t)
              setShowSpinner(true)
              setUsersList([])
            }}
          />
        </Header>
        <List
          data={usersList}
          renderItem={renderItem}
          onEndReachedThreshold={0.6}
          onEndReached={() => loadUsersList(page)}
          showsVerticalScrollIndicator={false}
          viewabilityConfig={{
            viewAreaCoveragePercentThreshold: 10,
          }}
          ListFooterComponent={renderListFooterComponent()}
        />
      </ContentWrapper>
    </LoggedWrapper>
  )
}
