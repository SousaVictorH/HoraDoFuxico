import { ScreenWrapper } from 'templates/ScreenWrapper'

import { SignUpForm } from 'components/forms/SignUp'

import { images } from 'resources/images'

import {
  ContentWrapper,
  Image,
  FormContainer
} from './styles'
import { handleSubmitProps, Props } from "./types"

export const SignUpScreen = ({
  navigation
}: Props) => {
  const handleSubmit = ({
    name,
    birthDate,
    photo
  }: handleSubmitProps) => {
    console.log(name, birthDate, photo)
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