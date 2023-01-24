import {
  HomeIcon,
  NotificationsIcon,
  HelpIcon
} from "resources/svgIcons";

import {
  HELP_SCREEN,
  HOME_SCREEN,
  NOTIFICATIONS_SCREEN
} from "constants/screens";

import { TabBarContainer, ItemContainer } from "./styles";
import { Props } from "./types"

export const TabBar = ({
  descriptors,
  navigation,
  state
}: Props) => {
  const getIcon = (routeName: string, isActive: boolean) => {
    switch (routeName) {
      case HOME_SCREEN:
        return <HomeIcon active={isActive} />

      case NOTIFICATIONS_SCREEN:
        return <NotificationsIcon active={isActive} />

      case HELP_SCREEN:
        return <HelpIcon active={isActive} />

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