import Calendar from "../../../assets/svgIcons/calendar.svg"

import { Props, defaultProps } from './types'

export const CalendarIcon = ({
  width,
  height,
  color,
  active
}: Props) => {
  return (
    <Calendar
      width={width}
      height={height}
      color={color}
      fillOpacity={active ? 1 : 0.5}
    />
  )
}

CalendarIcon.defaultProps = defaultProps