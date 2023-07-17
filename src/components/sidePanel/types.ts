import { StackScreenProps } from "@react-navigation/stack";

export type Props = StackScreenProps<any> & {
  showSidePanel: boolean
  toggleSidePanel: () => void
}
