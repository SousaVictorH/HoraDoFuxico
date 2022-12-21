import { useState, useEffect, useRef } from "react"
import { TextInput } from "react-native"

import { PartInput } from "components/inputs/PartInput"

import { replaceAt } from "utils/strings"

import { Container } from "./styles"
import { Props } from "./types"

export const TokenInput = ({
  onSubmit
}: Props) => {
  // Inputs Refs
  const part0Input = useRef<TextInput>(null)
  const part1Input = useRef<TextInput>(null)
  const part2Input = useRef<TextInput>(null)
  const part3Input = useRef<TextInput>(null)
  const part4Input = useRef<TextInput>(null)
  const part5Input = useRef<TextInput>(null)

  const [token, setToken] = useState('');

  useEffect(() => {
    token.length === 6 && onSubmit(token)
  }, [token])

  const handleSetValue = (index: number, text: string) => {
    setToken(replaceAt(token, index, text))
  }

  return (
    <Container>
      <PartInput
        ref={part0Input}
        value={token.charAt(0)}
        setValue={(text: string) => handleSetValue(0, text)}
        callNext={() => part1Input.current?.focus()}
      />
      <PartInput
        ref={part1Input}
        value={token.charAt(1)}
        setValue={(text: string) => handleSetValue(1, text)}
        callNext={() => part2Input.current?.focus()}
        callPrevious={() => part0Input.current?.focus()}
      />
      <PartInput
        ref={part2Input}
        value={token.charAt(2)}
        setValue={(text: string) => handleSetValue(2, text)}
        callNext={() => part3Input.current?.focus()}
        callPrevious={() => part1Input.current?.focus()}
      />
      <PartInput
        ref={part3Input}
        value={token.charAt(3)}
        setValue={(text: string) => handleSetValue(3, text)}
        callNext={() => part4Input.current?.focus()}
        callPrevious={() => part2Input.current?.focus()}
      />
      <PartInput
        ref={part4Input}
        value={token.charAt(4)}
        setValue={(text: string) => handleSetValue(4, text)}
        callNext={() => part5Input.current?.focus()}
        callPrevious={() => part3Input.current?.focus()}
      />
      <PartInput
        ref={part5Input}
        value={token.charAt(5)}
        setValue={(text: string) => handleSetValue(5, text)}
        callNext={() => {
          part5Input.current?.blur()
        }}
        callPrevious={() => part4Input.current?.focus()}
      />
    </Container>
  )
}
