import React, { useRef, useState, useCallback } from "react"
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  Animated
} from "react-native"

import { PartInput } from "components/inputs/PartInput"

import { Container } from "./styles"
import { Props } from "./types"

export const TokenInput = ({
  onSubmit,
  length,
  disabled
}: Props) => {
  const [value, setValue] = useState<Array<string>>(Array(length).fill(''))
  const inputRefs = useRef<Array<TextInput>>([])

  const anim = useRef(new Animated.Value(0))

  const onChange = async (newValue: Array<string>) => {
    setValue(newValue)

    const str = newValue.join('')

    if (str.length !== length) return

    const shouldAnimatedShake = await onSubmit(str)

    if (shouldAnimatedShake) animatedShake()
  }

  const onChangeValue = (text: string, index: number) => {
    const newValue = value.map((item: string, valueIndex: number) => {
      if (valueIndex === index) {
        return text
      }

      return item
    })

    onChange(newValue)
  }

  const handleChange = (text: string, index: number) => {
    onChangeValue(text, index)

    if (text.length !== 0) {
      if (index + 1 < length) return inputRefs?.current[index + 1]?.focus()
      else return inputRefs?.current[index]?.blur()
    }

    return inputRefs?.current[index - 1]?.focus()
  }

  const handleBackspace = (event: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    const { nativeEvent } = event

    if (nativeEvent.key === 'Backspace') {
      handleChange('', index)
    }
  }

  const animatedShake = useCallback(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim.current, {
          toValue: -2,
          duration: 50,
          useNativeDriver: true
        }),
        Animated.timing(anim.current, {
          toValue: 2,
          duration: 50,
          useNativeDriver: true
        }),
        Animated.timing(anim.current, {
          toValue: 0,
          duration: 50,
          useNativeDriver: true
        }),
      ]),
      { iterations: 2 }
    ).start();
  }, []);

  return (
    <Container style={{ transform: [{ translateX: anim.current }] }} >
      {value.map((_, index) => (
        <PartInput
          key={index}
          ref={(ref) => {
            // Add to input ref list
            if (ref && !inputRefs.current.includes(ref)) {
              inputRefs.current = [...inputRefs.current, ref]
            }
          }}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(evt) => handleBackspace(evt, index)}
          contextMenuHidden
          selectTextOnFocus
          editable={!disabled}
          keyboardType="number-pad"
        />
      ))}
    </Container>
  )
}

TokenInput.defaultProps = {
  disabled: false,
  length: 6
}
