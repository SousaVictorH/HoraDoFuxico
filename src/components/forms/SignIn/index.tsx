import React, { useState } from 'react'

import { FormWrapper } from 'templates/FormWrapper'
import { PhoneInput } from 'components/inputs/PhoneInput'
import SocialMediaButton from 'components/buttons/SocialMediaButton'

import { phoneSignIn, orConectUsing } from 'constants/texts'
import { icons } from 'resources/icons'

import {
  Label,
  FormButton,
  SocialSignInWrapper,
  SocialDiv,
  SocialSignInLabel,
  SocialMediaButtonsContainer
} from './styles'
import { Props } from './types'

export const SignInForm = ({
  onSignIn,
  onSocialSignIn,
  isLoading
}: Props) => {
  const [areaCode, setAreaCode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSignIn = () => {
    onSignIn({ areaCode, phoneNumber })
  }

  return (
    <FormWrapper>
      <Label>{phoneSignIn}</Label>
      <PhoneInput
        areaCode={areaCode}
        setAreaCode={setAreaCode}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      <FormButton
        onPress={handleSignIn}
        marginTop="lg"
        isLoading={isLoading}
      />
      <SocialSignInWrapper>
        <SocialDiv />
        <SocialSignInLabel>{orConectUsing}</SocialSignInLabel>
        <SocialMediaButtonsContainer>
          <SocialMediaButton
            iconSource={icons.googleIcon.path}
            appearance="Google"
            onPress={() => onSocialSignIn({ google: true, facebook: false })}
          />
          <SocialMediaButton
            iconSource={icons.facebookIcon.path}
            appearance="Facebook"
            onPress={() => onSocialSignIn({ google: false, facebook: true })}
          />
        </SocialMediaButtonsContainer>
      </SocialSignInWrapper>
    </FormWrapper>
  )
}
