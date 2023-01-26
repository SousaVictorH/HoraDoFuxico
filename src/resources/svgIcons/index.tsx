import Home from "../../../assets/svgIcons/home.svg"
import Help from "../../../assets/svgIcons/help.svg"
import Notifications from "../../../assets/svgIcons/notifications.svg"
import Toggle from "../../../assets/svgIcons/toggle.svg"
import GoBack from "../../../assets/svgIcons/goBack.svg"
import Open from "../../../assets/svgIcons/open.svg"
import Clock from "../../../assets/svgIcons/clock.svg"
import Calendar from "../../../assets/svgIcons/calendar.svg"

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
