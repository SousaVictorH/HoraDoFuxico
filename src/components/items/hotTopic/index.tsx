import React from "react";

import { hotTopic } from "resources/hotTopics/types"

import {
  Container,
  TextContainer,
  Title,
  Description,
  Image
} from "./styles";

export const HotTopic = ({
  description,
  image,
  category
}: hotTopic) => {
  return (
    <Container>
      <TextContainer>
        <Title>{category}</Title>
        <Description>{description}</Description>
      </TextContainer>
      <Image
        source={image}
        resizeMode="stretch"
      />
    </Container>
  )
}