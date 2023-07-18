import React, { useState } from "react"
import moment from "moment"

import Ionicons from '@expo/vector-icons/Ionicons'

import DateTimePickerModal from "react-native-modal-datetime-picker"

import { selectDay, selectTime } from "constants/texts"

import { Button, ButtonText } from "./styles"
import { Props } from "./types";

export const DateTimeInput = ({
  value,
  setValue,
  isDate,
  style,
  maximumDate,
  minimumDate,
  minuteInterval
}: Props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const hasSelected = value ? true : false
  const placeholder = isDate ? selectDay : selectTime
  const mode = isDate ? "date" : "time"

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  };

  const handleConfirm = (pickedValue: Date) => {
    const format = isDate ? "DD/MM/YYYY" : 'HH:mm'

    const newValue = moment(pickedValue).format(format)

    setValue(newValue)

    hideDatePicker()
  };

  return (
    <>
      <Button
        activeOpacity={1}
        onPress={() => setDatePickerVisibility(true)}
        style={style}
      >
        <ButtonText>
          {
            hasSelected ? value : placeholder
          }
        </ButtonText>
        <Ionicons name="chevron-up-outline" size={20} color="#252424" />
      </Button>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        minuteInterval={minuteInterval}
      />
    </>
  );
};
