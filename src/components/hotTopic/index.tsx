import { Props } from "./types";
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
  title
}: Props) => {
  return (
    <Container>
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
      <Image
        source={image}
        resizeMode="contain"
      />
    </Container>
  )
}