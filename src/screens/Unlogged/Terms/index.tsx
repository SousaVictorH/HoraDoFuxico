import { useRef } from 'react'

import { Modalize } from 'react-native-modalize'

import { ScreenWrapper } from 'templates/ScreenWrapper'

import { TermsForm } from 'components/forms/Terms'
import { dontWorry } from 'constants/texts'

import { getWindowHeight } from 'utils/dimensions'

import {
  ContentWrapper,
  AppNameImage,
  SubTitle,
  AppImage,
  FormContainer,
  TermsModal
} from './styles'
import { Props } from "./types"

const snapPoint = getWindowHeight() * 0.8

export const TermsScreen = ({
  navigation
}: Props) => {
  const modalizeRef = useRef<Modalize>(null)

  const onShowTerms = () => {
    modalizeRef.current?.open()
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
      <Modalize
        ref={modalizeRef}
        modalHeight={snapPoint}
        snapPoint={snapPoint}
        children={<TermsModal />}
      />
    </ScreenWrapper>
  )
}