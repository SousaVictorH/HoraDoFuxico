import { useEffect, useState } from 'react'

import { ScreenWrapper } from 'templates/ScreenWrapper'
import { AuthCodeForm } from 'components/forms/AuthCode'

import { usePopUpStore } from 'store/popUp'

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
  const { launchPopUp } = usePopUpStore()

  const [token, setToken] = useState('')

  const onSubmit = (inpuToken: string) => {
    if (inpuToken === token) {
      navigation.navigate(TERMS_SCREEN)
    } else {
      launchPopUp({
        type: 'WARNING',
        title: 'Aviso',
        description: `Token inserido está incorreto`
      })
    }
  }

  const generateNewToken = () => {
    const token = (Math.floor(Math.random() * 1000000) + 1000000).toString().substring(1);

    setToken(token)

    launchPopUp({
      type: 'INFO',
      title: 'Token de Acesso',
      description: `Seu Token de accesso é ${token}`
    })
  }

  useEffect(() => {
    setTimeout(() => generateNewToken(), 500)
  }, [])

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
            onResendCode={generateNewToken}
          />
        </FormContainer>
      </ContentWrapper>
    </ScreenWrapper>
  )
}