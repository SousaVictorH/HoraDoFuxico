import Ionicons from '@expo/vector-icons/Ionicons'

import {
  HELP_SCREEN,
  STACK_NAVIGATOR,
  NOTIFICATIONS_SCREEN
} from "constants/screens";

import { TabBarContainer, ItemContainer } from "./styles";
import { Props } from "./types"

export const TabBar = ({
  navigation,
  state
}: Props) => {
  const getIcon = (routeName: string, isActive: boolean) => {
    switch (routeName) {
      case STACK_NAVIGATOR:
        return <Ionicons name="home-sharp" size={32} color="#FFF" style={{ opacity: isActive ? 1 : .7 }} />

      case NOTIFICATIONS_SCREEN:
        return <Ionicons name="notifications" size={32} color="#FFF" style={{ opacity: isActive ? 1 : .7 }} />

      case HELP_SCREEN:
        return <Ionicons name="help-circle" size={32} color="#FFF" style={{ opacity: isActive ? 1 : .7 }} />

      default:
        return null
    }
  }

  const routesNumber = state.routes[1].state?.routes.length

  /**
   * When inside create new schedule screen or edit profile screen 
   * hide bottom tab
   */
  if (routesNumber === 2) return null

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