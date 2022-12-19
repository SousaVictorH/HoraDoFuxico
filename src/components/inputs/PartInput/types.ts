import { KeyboardTypeOptions } from "react-native"

export type Props = {
  autoFocus?: boolean
  value: string
  setValue: (text: string) => void
  keyboardType?: KeyboardTypeOptions
  maxLength?: number
  callNext: () => void
  callPrevious?: () => void
}