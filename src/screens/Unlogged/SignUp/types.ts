import { StackScreenProps } from '@react-navigation/stack'
import { RootParamList } from 'routes/types'

export type Props = StackScreenProps<RootParamList, 'SIGN_UP_SCREEN'>

export type handleSubmitProps = {
  name: string
  birthDate: string
  photo: string
}
