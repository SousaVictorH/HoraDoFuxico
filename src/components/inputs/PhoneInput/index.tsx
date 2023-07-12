import { useRef } from 'react'
import { TextInput } from 'react-native'
import { phoneMask } from 'utils/phone'

import {
  InputsWrapper,
  LeftInput,
  RightInput
} from './styles'
import { PhoneInputProps } from './types'

export const PhoneInput = ({
  areaCode,
  setAreaCode,
  phoneNumber,
  setPhoneNumber
}: PhoneInputProps) => {
  const phoneNumberInputRef = useRef<TextInput>(null)

  return (
    <InputsWrapper>
      <LeftInput
        value={areaCode}
        onChangeText={text => {
          setAreaCode(text)

          if (text.length >= 2) phoneNumberInputRef.current?.focus()
        }}
        maxLength={2}
        keyboardType="numeric"
      />
      <RightInput
        ref={phoneNumberInputRef}
        value={phoneNumber}
        onChangeText={text => {
          const maskedPhone = phoneMask(text)

          setPhoneNumber(maskedPhone)

          if (maskedPhone.length >= 9) phoneNumberInputRef.current?.blur()
        }}
        maxLength={10}
        keyboardType="numeric"
      />
    </InputsWrapper>
  )
}