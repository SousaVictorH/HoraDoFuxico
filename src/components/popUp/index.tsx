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

  return showPopUp && (
    <Container style={{ shadowOffset: { width: 0, height: 1 } }}>
      <Icon
        source={icons.info.path}
        resizeMode='contain'
      />
      <ContentWrapper>
        <Title>{popUp?.title}</Title>
        <Description>{popUp?.description}</Description>
      </ContentWrapper>
    </Container>
  );
}
