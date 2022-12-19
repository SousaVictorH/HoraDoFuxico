import { useState, useEffect, useRef } from "react"
import { TextInput } from "react-native"

import { PartInput } from "components/inputs/PartInput"
import { hasUndefinedParam } from "utils/objects"

import { Container } from "./styles"
import { Props, TokenInputParts } from "./types"

export const TokenInput = ({
  setToken,
  onSubmit
}: Props) => {
  // Inputs Refs
  const part0Input = useRef<TextInput>(null)
  const part1Input = useRef<TextInput>(null)
  const part2Input = useRef<TextInput>(null)
  const part3Input = useRef<TextInput>(null)
  const part4Input = useRef<TextInput>(null)
  const part5Input = useRef<TextInput>(null)

  // States
  const [part0, setPart0] = useState('');
  const [part1, setPart1] = useState('');
  const [part2, setPart2] = useState('');
  const [part3, setPart3] = useState('');
  const [part4, setPart4] = useState('');
  const [part5, setPart5] = useState('');

  useEffect(() => {
    const calculateToken = (parts: TokenInputParts) => {
      const isValid = !hasUndefinedParam(parts);

      if (isValid) {
        const token = `${parts.part0}${parts.part1}${parts.part2}${parts.part3}${parts.part4}${parts.part5}`;

        setToken(token);
      }
    };

    calculateToken({ part0, part1, part2, part3, part4, part5 });
  }, [part0, part1, part2, part3, part4, part5]);

  return (
    <Container>
      <PartInput
        ref={part0Input}
        value={part0}
        setValue={setPart0}
        callNext={() => part1Input.current?.focus()}
      />
      <PartInput
        ref={part1Input}
        value={part1}
        setValue={setPart1}
        callNext={() => part2Input.current?.focus()}
        callPrevious={() => part0Input.current?.focus()}
      />
      <PartInput
        ref={part2Input}
        value={part2}
        setValue={setPart2}
        callNext={() => part3Input.current?.focus()}
        callPrevious={() => part1Input.current?.focus()}
      />
      <PartInput
        ref={part3Input}
        value={part3}
        setValue={setPart3}
        callNext={() => part4Input.current?.focus()}
        callPrevious={() => part2Input.current?.focus()}
      />
      <PartInput
        ref={part4Input}
        value={part4}
        setValue={setPart4}
        callNext={() => part5Input.current?.focus()}
        callPrevious={() => part3Input.current?.focus()}
      />
      <PartInput
        ref={part5Input}
        value={part5}
        setValue={setPart5}
        callNext={() => {
          part5Input.current?.blur()
          onSubmit()
        }}
        callPrevious={() => part4Input.current?.focus()}
      />
    </Container>
  )
}
