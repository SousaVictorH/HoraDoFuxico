import {
  Container,
  Bar,
  ContentWrapper,
  Title,
  Description
} from "./styles"

import { ToastProps } from "store/toast/types"

export const Toast = ({
  type,
  title,
  description
}: ToastProps) => {
  return (
    <Container>
      <Bar type={type} />
      <ContentWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
    </Container>
  )
}