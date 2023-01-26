import { RootStackParamList } from "routes/types"

export type PanelOption = {
  icon: string
  title: string
  navigateTo: keyof RootStackParamList
}
