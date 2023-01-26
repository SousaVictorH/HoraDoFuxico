import GoBack from "../../../assets/svgIcons/goBack.svg"

import { Props, defaultProps } from './types'

export const GoBackIcon = ({
  width,
  height,
  color,
  active
}: Props) => {
  return (
    <GoBack
      width={width}
      height={height}
      color={color}
      fillOpacity={active ? 1 : 0.5}
    />
  )
}

GoBackIcon.defaultProps = defaultProps