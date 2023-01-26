import React, { useState } from "react";
import moment from "moment";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import { selectDay, selectTime } from "constants/texts"
import { OpenIcon } from "resources/svgIcons";

import { Button, ButtonText, IconWrapper } from "./styles"
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
    if (isDate) {
      const date = moment(pickedValue).format("DD/MM/YYYY")

      setValue(date)
    } else {
      const time = moment(pickedValue).format('HH:mm')

      setValue(time)
    }

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
        <IconWrapper>
          <OpenIcon height={8} width={18} />
        </IconWrapper>
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
