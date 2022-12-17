import { Container } from "./styles"
import { Props } from "./types"

export const FormContainer = ({ children }: Props) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
