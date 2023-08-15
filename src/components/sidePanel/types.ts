import { NavigationHelpers, ParamListBase } from '@react-navigation/native'
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types'

export type Props = {
  showSidePanel: boolean
  toggleSidePanel: () => void
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
}
