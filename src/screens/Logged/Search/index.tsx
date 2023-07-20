import { LoggedWrapper } from 'templates/LoggedWrapper'

import { searchText } from 'constants/texts'

import {
  ContentWrapper,
  Text
} from './styles'
import { Props } from "./types"

export const SearchScreen = ({
  toggleSidePanel
}: Props) => {
  return (
    <LoggedWrapper toggleSidePanel={toggleSidePanel}>
      <ContentWrapper>
        <Text>{searchText}</Text>
      </ContentWrapper>
    </LoggedWrapper>
  )
}