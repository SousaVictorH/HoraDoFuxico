import Notifications from "../../../assets/svgIcons/notifications.svg"

import { Props, defaultProps } from './types'

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