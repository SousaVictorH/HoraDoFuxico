import { KeyboardTypeOptions, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native'

export type Props = {
  onChangeText: (text: string) => void
  onKeyPress: (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void
  contextMenuHidden: boolean
  selectTextOnFocus: boolean
  editable: boolean
  keyboardType?: KeyboardTypeOptions
}
