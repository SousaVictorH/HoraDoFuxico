import { useEffect, useState } from "react"
import { Animated } from "react-native"

import { panelOptions } from "resources/panelOptions"
import { PanelOption } from "resources/panelOptions/types"

import {
  Container,
  PanelContainer,
  ContentWrapper,
  Item,
  ItemText,
  ArrowText
} from "./styles"
import { Props } from "./types"

export const SidePanel = ({
  showSidePanel,
  toggleSidePanel,
  navigation
}: Props) => {
  const [width] = useState(new Animated.Value(0))

  const animate = (toValue: number) => {
    Animated.timing(width, {
      toValue: toValue,
      duration: 350,
      useNativeDriver: false
    }).start()
  }

  const animateClose = () => {
    animate(0)

    setTimeout(() => toggleSidePanel(), 350);
  }

  useEffect(() => {
    animate(showSidePanel ? 240 : 0)
  }, [showSidePanel])

  return (
    <>
      {showSidePanel && (
        <Container activeOpacity={1} onPress={animateClose}>
          <PanelContainer style={{ width: width }}>
            <ContentWrapper activeOpacity={1}>
              {
                panelOptions.map(({
                  icon,
                  title,
                  navigateTo
                }: PanelOption) => (
                  <Item onPress={() => {
                    navigation.navigate(navigateTo)
                    animateClose()
                  }}>
                    <ArrowText>{icon}</ArrowText>
                    <ItemText>{title}</ItemText>
                  </Item>
                ))
              }
            </ContentWrapper>
          </PanelContainer>
        </Container>
      )}
    </>
  )
}
