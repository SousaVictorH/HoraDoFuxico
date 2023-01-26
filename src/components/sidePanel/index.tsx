import { useEffect, useState } from "react"
import { Animated } from "react-native"

import { panelOptions } from "resources/panelOptions"
import { PanelOption } from "resources/panelOptions/types"

import { RootStackParamList } from "routes/types"

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

  const handleNavigateTo = (navigateTo: keyof RootStackParamList) => {
    navigation.navigate(navigateTo)
    animateClose()
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
                  <Item
                    key={title}
                    onPress={() => handleNavigateTo(navigateTo)}
                  >
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
