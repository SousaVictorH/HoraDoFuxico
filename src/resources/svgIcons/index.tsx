import Home from "../../../assets/svgIcons/home.svg"
import Help from "../../../assets/svgIcons/help.svg"
import Notifications from "../../../assets/svgIcons/notifications.svg"
import Toggle from "../../../assets/svgIcons/toggle.svg"

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

export const NotificationsIcon = ({
  width,
  height,
  color,
  active
}: Props) => {
  return (
    <Notifications
      width={width}
      height={height}
      color={color}
      fillOpacity={active ? 1 : 0.7}
    />
  )
}

NotificationsIcon.defaultProps = defaultProps

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
