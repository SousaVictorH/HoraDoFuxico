import { useEffect, useState } from "react"

import { Header } from "components/header"
import { SidePanel } from "components/sidePanel"

import { Container, ContentWrapper } from "./styles"
import { Props } from "./types"

export const LoggedWrapper = ({
  children,
  hideHeader,
  navigation
}: Props) => {
  const [showSidePanel, setShowSidePanel] = useState(false)

  useEffect(() => {
    return () => {
      setShowSidePanel(false)
    }
  }, [])

  return (
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
  )
}

LoggedWrapper.defaultProps = {
  hideHeader: false
}
