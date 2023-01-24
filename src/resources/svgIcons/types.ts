import Theme from "styles/theme"

export type Props = {
  width?: number
  height?: number
  color?: string
  active?: boolean
}

export const defaultProps = {
  width: 29,
  height: 29,
  color: Theme.colors.background.light,
  active: true
}