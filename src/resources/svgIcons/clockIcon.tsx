import Clock from "../../../assets/svgIcons/clock.svg"

import { Props, defaultProps } from './types'

export const ClockIcon = ({
  width,
  height,
  color,
  active
}: Props) => {
  return (
    <Clock
      width={width}
      height={height}
      color={color}
      fillOpacity={active ? 1 : 0.5}
    />
  )
}

ClockIcon.defaultProps = defaultProps