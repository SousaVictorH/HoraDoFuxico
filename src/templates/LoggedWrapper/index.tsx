import { Header } from "components/header"

import { Container, ContentWrapper } from "./styles"
import { Props } from "./types"

export const LoggedWrapper = ({
  children,
  navigation
}: Props) => {
  return (
    <Container>
      <Header />
      <ContentWrapper>
        {children}
      </ContentWrapper>
      {/* <Footer /> */}
    </Container>
  )
}