import Home from "../../../assets/svgIcons/home.svg"

import { Props, defaultProps } from './types'

export const HomeIcon = ({
  width,
  height,
  color,
  active
}: Props) => {
  return (
    <Home
      width={width}
      height={height}
      color={color}
      fillOpacity={active ? 1 : 0.7}
    />
  )
}

HomeIcon.defaultProps = defaultProps