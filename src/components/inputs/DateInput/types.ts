import { StyleProp, ViewStyle } from 'react-native';
import { DateTimePickerEvent } from "@react-native-community/datetimepicker"

export type Props = {
  display?: "default" | "compact" | "inline" | "spinner" | "clock" | "calendar",
  date?: Date,
  onChange: (event: DateTimePickerEvent, date?: Date) => void,
  minimunDate?: any,
  maximumDate?: any,
  style?: StyleProp<ViewStyle>
}
