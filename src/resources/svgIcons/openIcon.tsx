import Open from "../../../assets/svgIcons/open.svg"

import { Props, defaultProps } from './types'

export const OpenIcon = ({
  width,
  height,
  color,
  active
}: Props) => {
  return (
    <Open
      width={width}
      height={height}
      color={color}
      fillOpacity={active ? 1 : 0.5}
    />
  )
}

OpenIcon.defaultProps = defaultProps