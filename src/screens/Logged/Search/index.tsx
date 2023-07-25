import React, { useEffect, useState } from 'react'
import { ListRenderItem } from "react-native"

import Toast from 'react-native-toast-message'

import { LoggedWrapper } from 'templates/LoggedWrapper'

import { UserItem } from 'components/items/userItem'
import { SearchInput } from 'components/inputs/SearchInput'

import { useDebounce } from 'utils/useDebounce'
import { getUsers } from 'interfaces/api'

import {
  ContentWrapper,
  List,
  Header,
  Spinner
} from './styles'
import { Props } from "./types"
import { PROFILE_SCREEN } from 'constants/screens'

export const SearchScreen = ({
  toggleSidePanel,
  navigation
}: Props) => {
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(2)

  const [isLoading, setIsLoading] = useState(false)
  const [usersList, setUsersList] = useState<any[]>([])

  const [showSpinner, setShowSpinner] = useState(false)

  const [searchFieldDisplayValue, setSearchFieldDisplayValues] = useState('')
  const [searchField, setSearchField] = useState('')

  const debounceChange = useDebounce(setSearchField, 500)

  const loadUsersList = async (shouldReset: boolean) => {
    const currentPage = shouldReset ? 1 : page

    if (isLoading || currentPage > numberOfPages) return

    if (shouldReset) {
      setPage(currentPage)
      setNumberOfPages(currentPage + 1)
    }

    setIsLoading(true)
    setShowSpinner(true)
    const response = await getUsers(searchField, currentPage)
    setIsLoading(false)
    setShowSpinner(false)

    if (response.error) {
      return Toast.show({
        type: 'error',
        text1: 'Alerta',
        text2: 'Algo deu errado...'
      })
    }

    setPage(currentPage + 1)
    setNumberOfPages(response.data.numberOfPages)
    setUsersList([...usersList, ...response.data.users])
  }

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

  useEffect(() => {
    loadUsersList(true)
  }, [searchField])

  return (
    <LoggedWrapper toggleSidePanel={toggleSidePanel}>
      <ContentWrapper>
        <Header>
          <SearchInput
            value={searchFieldDisplayValue}
            onChangeText={t => {
              setSearchFieldDisplayValues(t)
              debounceChange(t)
              setUsersList([])
              setShowSpinner(true)
            }}
          />
        </Header>
        <List
          data={usersList}
          renderItem={renderItem}
          onEndReachedThreshold={0.6}
          onEndReached={() => loadUsersList(false)}
          ListFooterComponent={
            <>
              {showSpinner && <Spinner />}
            </>
          }
        />
      </ContentWrapper>
    </LoggedWrapper>
  )
}