import { useStore } from "store"

import { ScreenWrapper } from 'templates/ScreenWrapper'
import { SignUpForm } from 'components/forms/SignUp'

import { images } from 'resources/images'
import { LOGGED_NAVIGATOR } from "constants/screens"

import {
  ContentWrapper,
  Image,
  FormContainer
} from './styles'
import { handleSubmitProps, Props } from "./types"

export const SignUpScreen = ({
  navigation
}: Props) => {
  const { setPersonalData } = useStore()

  const handleSubmit = ({
    name,
    birthDate,
    photo
  }: handleSubmitProps) => {
    setPersonalData(name, birthDate, photo)

    navigation.navigate(LOGGED_NAVIGATOR)
  }

  return (
    <ScreenWrapper scroll>
      <ContentWrapper>
        <Image
          source={images.appName.path}
          resizeMode="contain"
        />
        <FormContainer>
          <SignUpForm
            onSignUp={handleSubmit}
          />
        </FormContainer>
      </ContentWrapper>
    </ScreenWrapper>
  )
}