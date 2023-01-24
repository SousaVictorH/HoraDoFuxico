import { LoggedWrapper } from 'templates/LoggedWrapper'

import { helpText } from 'constants/texts'

import {
  ContentWrapper,
  Text
} from './styles'
import { Props } from "./types"

export const HelpScreen = ({
  navigation
}: Props) => {
  return (
    <LoggedWrapper navigation={navigation}>
      <ContentWrapper>
        <Text>{helpText}</Text>
      </ContentWrapper>
    </LoggedWrapper>
  )
}