import { NavigationProp } from "@react-navigation/native"

export interface Props {
  navigation: NavigationProp<any>
}

export type OnSignInProps = {
  areaCode: string
  phoneNumber: string
}

export type OnSocialSignInProps = {
  google: boolean
  facebook: boolean
}