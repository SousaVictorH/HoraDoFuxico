import { useState } from "react"

import DatePicker from "@react-native-community/datetimepicker"

import { Container, DatePickerComponent } from "./styles"
import { Props } from './types'

export const DateInput = ({
  display,
  date,
  onChange,
  minimunDate,
  maximumDate,
  style
}: Props) => {
  const [showPicker, setShowPicker] = useState(false)

  return (
    <Container style={style} onPress={() => setShowPicker(!showPicker)}>
      <DatePickerComponent
        mode={"date"}
        display={display}
        value={date || new Date()}
        onChange={onChange}
        minimumDate={minimunDate}
        maximumDate={maximumDate}

      />
    </Container>
  )
}

DateInput.defaultProps = {
  display: "default",
  minimumDate: new Date(1920, 1, 1),
  maximumDate: new Date()
}
