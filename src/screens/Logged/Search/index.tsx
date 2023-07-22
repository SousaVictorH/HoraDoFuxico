import React, { useEffect, useState } from 'react'
import { ListRenderItem } from "react-native"

import Toast from 'react-native-toast-message'

import { SearchInput } from 'components/inputs/SearchInput'
import { LoggedWrapper } from 'templates/LoggedWrapper'

import { useDebounce } from 'utils/useDebounce'
import { getUsers } from 'interfaces/api'

import {
  ContentWrapper,
  List,
  Header,
  ItemWrapper,
  Text
} from './styles'
import { Props } from "./types"

export const SearchScreen = ({
  toggleSidePanel
}: Props) => {
  const [page, setPage] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(2)

  const [isLoading, setIsLoading] = useState(false)
  const [usersList, setUsersList] = useState<any[]>([])

  const [searchFieldDisplayValue, setSearchFieldDisplayValues] = useState('')
  const [searchField, setSearchField] = useState('')

  const debounceChange = useDebounce(setSearchField, 500)

  const loadUsersList = async (shouldReset: boolean) => {
    const currentPage = shouldReset ? 1 : page

    console.log(isLoading, currentPage, numberOfPages)

    if (isLoading || currentPage > numberOfPages) return

    if (shouldReset) {
      setPage(currentPage)
      setNumberOfPages(currentPage + 1)
    }

    setIsLoading(true)
    const response = await getUsers(searchField, currentPage)
    setIsLoading(false)

    if (response.error) {
      const statusText = '' + response.error

      if (!statusText.includes('403')) {
        Toast.show({
          type: 'error',
          text1: 'Alerta',
          text2: 'Algo deu errado...'
        })
      }

      return
    }

    setPage(currentPage + 1)
    setNumberOfPages(response.data.numberOfPages)
    setUsersList([...usersList, ...response.data.users])
  }

  const renderItem: ListRenderItem<any> = ({
    item,
    index
  }: any) => (
    <ItemWrapper key={item.id}>
      <Text>{item.name}</Text>
    </ItemWrapper>
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
            }}
          />
        </Header>
        <List
          data={usersList}
          renderItem={renderItem}
          onEndReachedThreshold={0.6}
          onEndReached={() => loadUsersList(false)}
        />
      </ContentWrapper>
    </LoggedWrapper>
  )
}