import { NavigationProp, RouteProp } from "@react-navigation/native"

export interface Props {
  navigation: NavigationProp<any>,
  route: RouteProp<{ params: { phoneNumber: string } }, 'params'>
}

export type handleSubmitProps = {
  name: string
  birthDate: string
  photo: string
}