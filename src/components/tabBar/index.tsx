import Ionicons from '@expo/vector-icons/Ionicons'

import {
  PROFILE_SCREEN,
  HOME_SCREEN,
  SEARCH_SCREEN
} from "constants/screens";

import { TabBarContainer, ItemContainer } from "./styles";
import { Props } from "./types"

export const TabBar = ({
  navigation,
  state
}: Props) => {
  const getIcon = (routeName: string, isActive: boolean) => {
    switch (routeName) {
      case SEARCH_SCREEN:
        return <Ionicons name="search" size={31} color="#FFF" style={{ opacity: isActive ? 1 : .7 }} />

      case HOME_SCREEN:
        return <Ionicons name="home-sharp" size={30} color="#FFF" style={{ opacity: isActive ? 1 : .7 }} />
      case PROFILE_SCREEN:
        return <Ionicons name="person" size={30} color="#FFF" style={{ opacity: isActive ? 1 : .7 }} />

      default:
        return null
    }
  }

  return (
    <TabBarContainer>
      {
        state.routes.map((route: any, index: number) => {
          const isActive = state.index === index

          return (
            <ItemContainer
              key={index}
              onPress={() => navigation.navigate(route.name)}
            >
              {getIcon(route.name, isActive)}
            </ItemContainer>
          )
        })
      }
    </TabBarContainer>
  )
}