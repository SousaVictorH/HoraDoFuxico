import { ScreenWrapper } from 'templates/ScreenWrapper'
import { AuthCodeForm } from 'components/forms/AuthCode'

import { promoteFun } from 'constants/texts'

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
  const onSubmit = (token: string) => {
    console.log('token: ', token)
  }

  const onResendCode = () => {
    console.log('onResendCode')
  }

  return (
    <ScreenWrapper scroll >
      <ContentWrapper>
        <AppNameImage
          source={require('../../../../assets/images/YellowAppName.png')}
          resizeMode="contain"
        />
        <SubTitle>{promoteFun}</SubTitle>
        <AppImage
          source={require('../../../../assets/images/Image2.png')}
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