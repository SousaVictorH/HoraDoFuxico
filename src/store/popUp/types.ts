export type PopUpTypes = {
  WARNING: 'WARNING',
  INFO: 'INFO',
  SUCCESS: 'SUCCESS'
}

export type PopUpProps = {
  type: keyof PopUpTypes
  title: string
  description: string
}

export interface State {
  showPopUp: boolean
  popUp?: PopUpProps
  setShowPopUp: (showPopUp: boolean) => void
  launchPopUp: (popUpProps: PopUpProps) => void
}