import { LoggedWrapper } from 'templates/LoggedWrapper'

import { helpText } from 'constants/texts'

import {
  ContentWrapper,
  Text
} from './styles'
import { Props } from "./types"

export const HelpScreen = ({
  toggleSidePanel
}: Props) => {
  return (
    <LoggedWrapper toggleSidePanel={toggleSidePanel}>
      <ContentWrapper>
        <Text>{helpText}</Text>
      </ContentWrapper>
    </LoggedWrapper>
  )
}