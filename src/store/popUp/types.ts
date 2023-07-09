export type PopUpTypes = {
  WARNING: 'error',
  INFO: 'info',
  SUCCESS: 'success'
}

export type PopUpProps = {
  type: keyof PopUpTypes
  title: string
  description: string
}

export interface State {
  popUp?: PopUpProps
  launchPopUp: (popUpProps: PopUpProps) => void
}