import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "routes/types";

export type Props = StackScreenProps<RootStackParamList>;

export type handleSubmitProps = {
  name: string
  age: number
  photo: string
}