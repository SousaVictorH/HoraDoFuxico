import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from 'routes/types'

export type Props = StackScreenProps<RootStackParamList, 'SIGN_UP_SCREEN'>

export type handleSubmitProps = {
  name: string
  birthDate: string
  photo: string
}
