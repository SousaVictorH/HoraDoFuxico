import { useStore } from "store"

import { ScreenWrapper } from 'templates/ScreenWrapper'
import { AuthCodeForm } from 'components/forms/AuthCode'

import { promoteFun } from 'constants/texts'
import { TERMS_SCREEN } from 'constants/screens'

import { images } from 'resources/images'

import {
  ContentWrapper,
  AppNameImage,
  SubTitle,
  AppImage,
  FormContainer
} from './styles'
import { Props } from "./types"

export const AuthenticationScreen = ({
  navigation
}: Props) => {
  const { setToken } = useStore()

  const onSubmit = (token: string) => {
    setToken(token)

    navigation.navigate(TERMS_SCREEN)
  }

  const onResendCode = () => {
    // Resend Code
  }

  return (
    <ScreenWrapper scroll >
      <ContentWrapper>
        <AppNameImage
          source={images.yellowAppName.path}
          resizeMode="contain"
        />
        <SubTitle>{promoteFun}</SubTitle>
        <AppImage
          source={images.image2.path}
          resizeMode="contain"
        />
        <FormContainer>
          <AuthCodeForm
            onSubmit={onSubmit}
            onResendCode={onResendCode}
          />
        </FormContainer>
      </ContentWrapper>
    </ScreenWrapper>
  )
}