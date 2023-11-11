import React, { useRef, useState } from 'react'
import { View, TextInput } from 'react-native'

import Toast from 'react-native-toast-message'

import { FormWrapper } from 'templates/FormWrapper'

import {
  next,
  nameInputPlaceholder,
  birthDateInputPlaceholder,
  phonePlaceholder,
  phoneInputPlaceholder
} from 'constants/texts'

import { validateBirthDate } from 'utils/date'
import { phoneMask } from 'utils/phone'

import {
  FormButton,
  ContentWrapper,
  InputWrapper,
  InputCaption,
  Input,
  PhotoInput,
  DateTimeInput
} from './styles'
import { Props } from './types'

export const SignUpForm = ({
  initialName,
  initialPhoneNumber,
  initialPhoto,
  showPhoneInput,
  onSignUp
}: Props) => {
  const phoneInputRef = useRef<TextInput>(null)

  const [name, setName] = useState(initialName || '')
  const [birthDate, setBirthDate] = useState('')
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber || '')
  const [photo, setPhoto] = useState(initialPhoto || '')

  const handleSignUp = () => {
    const { isValid, message } = validateBirthDate(birthDate)

    if (isValid) onSignUp({ name, birthDate, photo, phoneNumber: phoneNumber.replace(/\D/g,'') })
    else Toast.show({
      type: 'error',
      text1: 'Aleta',
      text2: message
    })
  }

  const isValid =
    (name.length > 0) &&
    (birthDate.length === 10) &&
    (showPhoneInput ? phoneNumber.length === 15 : true)

  return (
    <FormWrapper>
      <ContentWrapper>
        <View>
          {showPhoneInput && (
            <InputWrapper>
              <InputCaption>{phonePlaceholder}</InputCaption>
              <Input
                ref={phoneInputRef}
                value={phoneNumber}
                setValue={(text: string) => {
                  if (text.length === 15) phoneInputRef.current?.blur()
                  setPhoneNumber(phoneMask(text, true))
                }}
                placeholder={phoneInputPlaceholder}
                maxLength={15}
              />
            </InputWrapper>
          )}
          <InputWrapper>
            <InputCaption>{nameInputPlaceholder}</InputCaption>
            <Input
              value={name}
              setValue={(text: string) => setName(text)}
              placeholder={nameInputPlaceholder}
            />
          </InputWrapper>
          <InputWrapper>
            <InputCaption>{birthDateInputPlaceholder}</InputCaption>
            <DateTimeInput
              value={birthDate}
              setValue={setBirthDate}
              isDate
            />
          </InputWrapper>
          <PhotoInput
            photo={photo}
            setPhoto={setPhoto}
          />
        </View>
        <FormButton
          onPress={handleSignUp}
          text={next}
          disabled={!isValid}
        />
      </ContentWrapper>
    </FormWrapper>
  )
}
