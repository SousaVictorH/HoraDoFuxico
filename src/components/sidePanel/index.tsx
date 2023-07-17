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
}: Props) => (
  <>
    {showSidePanel && (
      <Container activeOpacity={1} onPress={() => toggleSidePanel()}>
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
      </Container>
    )}
  </>
)
