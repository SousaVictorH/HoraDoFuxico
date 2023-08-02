import { useRef } from 'react'
import { TextInput } from 'react-native'
import { phoneMask } from 'utils/phone'

import {
  InputsWrapper,
  AreaCodeInput,
  PhoneNumberInput
} from './styles'
import { PhoneInputProps } from './types'

export const PhoneInput = ({
  areaCode,
  setAreaCode,
  phoneNumber,
  setPhoneNumber
}: PhoneInputProps) => {
  const areaCodeInputRef = useRef<TextInput>(null)
  const phoneNumberInputRef = useRef<TextInput>(null)

  return (
    <InputsWrapper>
      <AreaCodeInput
        ref={areaCodeInputRef}
        value={areaCode}
        onChangeText={text => {
          setAreaCode(text)

          if (text.length >= 2) phoneNumberInputRef.current?.focus()
        }}
        maxLength={2}
        keyboardType="numeric"
      />
      <PhoneNumberInput
        ref={phoneNumberInputRef}
        value={phoneNumber}
        onChangeText={text => {
          const maskedPhone = phoneMask(text)

          setPhoneNumber(maskedPhone)

          if (maskedPhone.length >= 10) phoneNumberInputRef.current?.blur()
          else if (maskedPhone.length == 0) areaCodeInputRef.current?.focus()
        }}
        onKeyPress={(evt) => {
          const { nativeEvent } = evt

          if (nativeEvent.key === 'Backspace' && phoneNumber.length == 0) areaCodeInputRef.current?.focus()
        }}
        maxLength={10}
        keyboardType="numeric"
      />
    </InputsWrapper>
  )
}