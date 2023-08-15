import React from 'react'

import { terms } from 'constants/texts'

import {
  firstConsiderations,
  firstConsiderationsDescription1,
  firstConsiderationsDescription2,
  gossipTime,
  gossipTimeDescription,
  providedData,
  providedDataDescription
} from 'constants/texts'

import {
  Container,
  Title,
  SectionTitle,
  SectionDescription
} from './styles'
import { Props } from './types'

export const TermsModal = ({
  style
}: Props) => {
  return (
    <Container style={style}>
      <Title>{terms}</Title>
      <SectionTitle>
        {firstConsiderations}
      </SectionTitle>
      <SectionDescription>
        {firstConsiderationsDescription1}
      </SectionDescription>
      <SectionDescription>
        {firstConsiderationsDescription2}
      </SectionDescription>
      <SectionTitle>
        {gossipTime}
      </SectionTitle>
      <SectionDescription>
        {gossipTimeDescription}
      </SectionDescription>
      <SectionTitle>
        {providedData}
      </SectionTitle>
      <SectionDescription>
        {providedDataDescription}
      </SectionDescription>
    </Container>
  )
}
