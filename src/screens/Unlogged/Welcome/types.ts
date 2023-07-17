import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "routes/types";

export type Props = StackScreenProps<RootStackParamList>;

export type OnSignInProps = {
  areaCode: string
  phoneNumber: string
}

export type OnSocialSignInProps = {
  google: boolean
  facebook: boolean
}