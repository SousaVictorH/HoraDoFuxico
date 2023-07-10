export const ToastTypes = {
  WARNING: 'ERROR',
  INFO: 'INFO',
  SUCCESS: 'SUCCESS'
}

export const ToastTitles = {
  ALERT: 'Alerta',
  SUCCESS: 'Sucesso',
  ACCESS_TOKEN: 'Token de Acesso'
}

export type ToastProps = {
  type: string
  title: string
  description: string
}

export interface State {
  toast?: ToastProps
  launchToast: (toastProps: ToastProps) => void
}