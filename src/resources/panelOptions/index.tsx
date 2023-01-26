import {
  HELP_SCREEN,
  HOME_SCREEN,
  NOTIFICATIONS_SCREEN,
  PROFILE_SCREEN
} from "constants/screens"
import { PanelOption } from "./types"

export const panelOptions: PanelOption[] = [
  {
    icon: '○',
    title: 'Dados Pessoais',
    navigateTo: PROFILE_SCREEN
  },
  {
    icon: '○',
    title: 'Notificações',
    navigateTo: NOTIFICATIONS_SCREEN
  },
  {
    icon: '○',
    title: 'Home',
    navigateTo: HOME_SCREEN
  },
  {
    icon: '○',
    title: 'Ajuda',
    navigateTo: HELP_SCREEN
  }

]
