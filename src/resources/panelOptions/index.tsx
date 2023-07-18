import Ionicons from '@expo/vector-icons/Ionicons'

import {
  HELP_SCREEN,
  HOME_SCREEN,
  NOTIFICATIONS_SCREEN,
  EDIT_PROFILE_SCREEN,
  PROFILE_SCREEN
} from "constants/screens"
import { PanelOption } from "./types"

export const panelOptions: PanelOption[] = [
  {
    icon: <Ionicons name="person" size={25} color="#FFF" />,
    title: 'Dados Pessoais',
    navigateTo: EDIT_PROFILE_SCREEN
  },
  {
    icon: <Ionicons name="help-circle" size={25} color="#FFF" />,
    title: 'Ajuda',
    navigateTo: HELP_SCREEN
  }
]
