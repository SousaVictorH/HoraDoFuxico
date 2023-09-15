import { StackScreenProps } from '@react-navigation/stack'
import { RootParamList } from 'routes/types'

export type Props = StackScreenProps<RootParamList, 'LANDING_SCREEN'>;

export type OnSignInProps = {
  areaCode: string
  phoneNumber: string
}

export type OnSocialSignInProps = {
  google: boolean
  facebook: boolean
}
