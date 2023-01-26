import { HELP_SCREEN, NOTIFICATIONS_SCREEN } from "constants/screens"
import { PanelOption } from "./types"

export const panelOptions: PanelOption[] = [
  {
    icon: '○',
    title: 'Dados Pessoais',
    navigateTo: HELP_SCREEN
  },
  {
    icon: '○',
    title: 'Ajuda',
    navigateTo: HELP_SCREEN
  },
  {
    icon: '○',
    title: 'Notificações',
    navigateTo: NOTIFICATIONS_SCREEN
  }
]
