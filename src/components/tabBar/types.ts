import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native'
import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap
} from '@react-navigation/bottom-tabs/lib/typescript/src/types'

export type Props = {
  state: TabNavigationState<ParamListBase>
  descriptors: BottomTabDescriptorMap
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
}
