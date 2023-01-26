import Toggle from "../../../assets/svgIcons/toggle.svg"

import { Props, defaultProps } from './types'

export const ToggleIcon = ({
  width,
  height,
  color,
  active
}: Props) => {
  return (
    <Toggle
      width={width}
      height={height}
      color={color}
      fillOpacity={active ? 1 : 0.5}
    />
  )
}

ToggleIcon.defaultProps = defaultProps