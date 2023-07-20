import React from "react"

import { Header } from "components/header"

import { Container, ContentWrapper } from "./styles"
import { Props } from "./types"
import { ScreenWrapper } from "templates/ScreenWrapper"

export const LoggedWrapper = ({
  children,
  hideHeader,
  scroll,
  toggleSidePanel
}: Props) => (
  <ScreenWrapper scroll={scroll} behavior="height">
    <Container>
      {!hideHeader && <Header toggleSidePanel={toggleSidePanel} />}
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Container>
  </ScreenWrapper>
)

LoggedWrapper.defaultProps = {
  hideHeader: false,
  scroll: false,
  toggleSidePanel: () => { }
}
