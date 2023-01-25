import { useState } from 'react'

import {
  connectNewPerson,
  generateKeyText,
  newKey,
  insertKey
} from "constants/texts"

import {
  Container,
  Text,
  Button,
  KeyWrapper,
  SubTitle,
  Title,
  Caption
} from './styles'
import { Props } from './types'

export const Connect = ({

}: Props) => {
  const [key, setKey] = useState('')

  const generateKey = () => {
    const seq = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);

    setKey(seq)
  }

  return (
    <Container>
      <Text>{connectNewPerson}</Text>
      {
        !key ? (
          <Button
            text={generateKeyText}
            onPress={generateKey}
          />
        ) : (
          <>
            <KeyWrapper>
              <SubTitle>{newKey}</SubTitle>
              <Title>{key}</Title>
            </KeyWrapper>
            <Caption>{insertKey}</Caption>
          </>
        )
      }
    </Container>
  )
}