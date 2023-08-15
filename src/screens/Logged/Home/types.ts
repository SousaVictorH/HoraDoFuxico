import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from 'routes/types'

export type Props = StackScreenProps<RootStackParamList, 'HOME_SCREEN'> & {
  toggleSidePanel: () => void
}
