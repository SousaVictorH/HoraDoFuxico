import { Header } from "components/header"

import { Container, ContentWrapper } from "./styles"
import { Props } from "./types"

export const LoggedWrapper = ({
  children,
  hideHeader
}: Props) => {
  return (
    <Container>
      {!hideHeader && <Header />}
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Container>
  )
}

LoggedWrapper.defaultProps = {
  hideHeader: false
}
