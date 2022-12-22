import { useRef } from 'react'

import { Modalize } from 'react-native-modalize'

import { ScreenWrapper } from 'templates/ScreenWrapper'
import { images } from 'resources/images'
import { SIGN_UP_SCREEN } from 'constants/screens'

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

const modalHeight = getWindowHeight() * 0.8

export const TermsScreen = ({
  navigation
}: Props) => {
  const modalizeRef = useRef<Modalize>(null)

  const onShowTerms = () => {
    modalizeRef.current?.open()
  }

  const onNext = () => {
    navigation.navigate(SIGN_UP_SCREEN)
  }

  return (
    <ScreenWrapper>
      <ContentWrapper>
        <AppNameImage
          source={images.orangeAppName.path}
          resizeMode="contain"
        />
        <SubTitle>{dontWorry}</SubTitle>
        <AppImage
          source={images.image3.path}
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
        modalHeight={modalHeight}
        snapPoint={modalHeight}
        children={<TermsModal />}
      />
    </ScreenWrapper>
  )
}