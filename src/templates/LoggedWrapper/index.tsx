import { useEffect, useState } from "react"

import { Header } from "components/header"
import { SidePanel } from "components/sidePanel"

import { Container, ContentWrapper } from "./styles"
import { Props } from "./types"
import { ScreenWrapper } from "templates/ScreenWrapper"

export const LoggedWrapper = ({
  children,
  hideHeader,
  navigation,
  scroll
}: Props) => {
  const [showSidePanel, setShowSidePanel] = useState(false)

  useEffect(() => {
    return () => {
      setShowSidePanel(false)
    }
  }, [])

  return (
    <ScreenWrapper scroll={scroll} behavior="height">
      <Container>
        {!hideHeader && <Header toggleSidePanel={() => setShowSidePanel(!showSidePanel)} />}
        <SidePanel
          navigation={navigation}
          showSidePanel={showSidePanel}
          toggleSidePanel={() => setShowSidePanel(!showSidePanel)}
        />
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </Container>
    </ScreenWrapper>
  )
}

LoggedWrapper.defaultProps = {
  hideHeader: false,
  scroll: false
}
