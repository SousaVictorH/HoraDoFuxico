import { Container } from "./styles"
import { Props } from "./types"

export const FormWrapper = ({ children }: Props) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
