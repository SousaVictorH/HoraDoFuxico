import React from "react"
import { GestureDetector, Gesture, Directions } from "react-native-gesture-handler"

import { runOnJS } from "react-native-reanimated"

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
  const gesture = Gesture
    .Fling()
    .direction(Directions.LEFT)
    .onEnd(() => showSidePanel && runOnJS(toggleSidePanel)())

  return (
    <>
      {showSidePanel && (
        <Container activeOpacity={1} onPress={() => toggleSidePanel()}>
          <GestureDetector gesture={gesture}>
            <PanelContainer>
              <ContentWrapper activeOpacity={1}>
                {
                  panelOptions.map(({
                    icon,
                    title,
                    navigateTo
                  }: PanelOption) => (
                    <Item
                      key={title}
                      onPress={() => navigation.navigate(navigateTo)}
                    >
                      <ArrowText>{icon}</ArrowText>
                      <ItemText>{title}</ItemText>
                    </Item>
                  ))
                }
              </ContentWrapper>
            </PanelContainer>
          </GestureDetector>
        </Container>
      )}
    </>
  )
}
