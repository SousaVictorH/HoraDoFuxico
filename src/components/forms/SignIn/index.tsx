import { useState } from "react"

import { FormContainer } from "../FormContainer"
import { PhoneInput } from "../../inputs/PhoneInput"
import SocialMediaButton from "../../buttons/SocialMediaButton"

import { phoneSignIn, orConectUsing } from "../../../constants/texts"

import {
  Label,
  FormButton,
  SocialSignInWrapper,
  SocialDiv,
  SocialSignInLabel,
  SocialMediaButtonsContainer
} from './styles'
import { Props } from "./types"

export const SignInForm = ({ onSignIn, onSocialSignIn }: Props) => {
  const [areaCode, setAreaCode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSignIn = () => {
    onSignIn({ areaCode, phoneNumber })
  }

  return (
    <FormContainer>
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
      />
      <SocialSignInWrapper>
        <SocialDiv />
        <SocialSignInLabel>{orConectUsing}</SocialSignInLabel>
        <SocialMediaButtonsContainer>
          <SocialMediaButton
            iconSource={require('../../../../assets/icons/icon_google.png')}
            appearance="Google"
            onPress={() => onSocialSignIn({ google: true, facebook: false })}
          />
          <SocialMediaButton
            iconSource={require('../../../../assets/icons/icon_facebook.png')}
            appearance="Facebook"
            onPress={() => onSocialSignIn({ google: false, facebook: true })}
          />
        </SocialMediaButtonsContainer>
      </SocialSignInWrapper>
    </FormContainer>
  )
}