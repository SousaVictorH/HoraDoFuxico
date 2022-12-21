import { ScreenWrapper } from 'templates/ScreenWrapper'

import { TermsForm } from 'components/forms/Terms'
import { dontWorry } from 'constants/texts'

import {
  ContentWrapper,
  AppNameImage,
  SubTitle,
  AppImage,
  FormContainer
} from './styles'
import { Props } from "./types"

export const TermsScreen = ({
  navigation
}: Props) => {
  const onShowTerms = () => {
    console.log('show terms')
  }

  const onNext = () => {
    console.log('onNext')
  }

  return (
    <ScreenWrapper>
      <ContentWrapper>
        <AppNameImage
          source={require('../../../../assets/images/OrangeAppName.png')}
          resizeMode="contain"
        />
        <SubTitle>{dontWorry}</SubTitle>
        <AppImage
          source={require('../../../../assets/images/Image3.png')}
          resizeMode="contain"
        />
        <FormContainer>
          <TermsForm
            onShowTerms={onShowTerms}
            onNext={onNext}
          />
        </FormContainer>
      </ContentWrapper>
    </ScreenWrapper>
  )
}