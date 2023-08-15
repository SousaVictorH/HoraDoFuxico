import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from 'routes/types'

export type Props = StackScreenProps<RootStackParamList, 'MY_PROFILE_SCREEN'> & {
  toggleSidePanel: () => void
}
