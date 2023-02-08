import React from 'react'

import { usePopUpStore } from 'store/popUp';

import { icons } from 'resources/icons';

import {
  Container,
  Icon,
  ContentWrapper,
  Title,
  Description
} from './styles';

export const PopUp = () => {
  const {
    showPopUp,
    popUp
  } = usePopUpStore()

  const getSource = () => {
    switch (popUp?.type) {
      case 'INFO':
        return icons.info.path

      case 'SUCCESS':
        return icons.success.path

      case 'WARNING':
        return icons.warning.path

      default:
        return undefined
    }
  }

  return showPopUp && (
    <Container
      {...popUp}
      style={{ shadowOffset: { width: 0, height: 1 } }}
    >
      <Icon
        source={getSource()}
        resizeMode='contain'
      />
      <ContentWrapper>
        <Title>{popUp?.title}</Title>
        <Description>{popUp?.description}</Description>
      </ContentWrapper>
    </Container>
  );
}
