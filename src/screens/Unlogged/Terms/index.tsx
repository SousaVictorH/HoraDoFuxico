import React, { useRef } from 'react'

import BottomSheetType from '@gorhom/bottom-sheet'

import { ScreenWrapper } from 'templates/ScreenWrapper'
import { images } from 'resources/images'
import { SIGN_UP_SCREEN } from 'constants/screens'

import { TermsForm } from 'components/forms/Terms'
import { dontWorry } from 'constants/texts'

import {
  ContentWrapper,
  AppNameImage,
  SubTitle,
  AppImageContainer,
  AppImage,
  FormContainer,
  TermsModal,
  BottomSheet
} from './styles'
import { Props } from './types'

export const TermsScreen = ({
  navigation,
  route
}: Props) => {
  const { phoneNumber } = route.params

  const bottomSheetRef = useRef<BottomSheetType>(null)

  const onShowTerms = () => {
    bottomSheetRef.current?.snapToIndex(0)
  }

  const onNextPressed = () => {
    navigation.navigate(SIGN_UP_SCREEN, { phoneNumber })
  }

  return (
    <ScreenWrapper>
      <ContentWrapper>
        <AppNameImage
          source={images.orangeAppName.path}
          resizeMode="contain"
        />
        <SubTitle>{dontWorry}</SubTitle>
        <AppImageContainer>
          <AppImage
            source={images.image3.path}
            resizeMode="contain"
          />
        </AppImageContainer>
        <FormContainer>
          <TermsForm
            onShowTerms={onShowTerms}
            onNext={onNextPressed}
          />
        </FormContainer>
      </ContentWrapper>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['70%', '82%']}
        enablePanDownToClose
        index={-1}
      >
        <TermsModal />
      </BottomSheet>
    </ScreenWrapper>
  )
}
