import { Text } from "react-native";

import { TabBarContainer, ItemContainer } from "./styles";
import { Props } from "./types"

export const TabBar = ({
  descriptors,
  navigation,
  state
}: Props) => {
  return (
    <TabBarContainer>
      {
        state.routes.map((route: any, index: number) => {
          return (
            <ItemContainer
              key={index}
              onPress={() => navigation.navigate(route.name)}
            >
              <Text>{route.name}</Text>
            </ItemContainer>
          )
        })
      }
    </TabBarContainer>
  )
}