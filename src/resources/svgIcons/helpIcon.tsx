import Help from "../../../assets/svgIcons/help.svg"

import { Props, defaultProps } from './types'

export const HelpIcon = ({
  width,
  height,
  color,
  active
}: Props) => {
  return (
    <Help
      width={width}
      height={height}
      color={color}
      fillOpacity={active ? 1 : 0.7}
    />
  )
}

HelpIcon.defaultProps = defaultProps