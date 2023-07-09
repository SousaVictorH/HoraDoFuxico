export type ToastTypes = {
  WARNING: 'error',
  INFO: 'info',
  SUCCESS: 'success'
}

export type ToastProps = {
  type: keyof ToastTypes
  title: string
  description: string
}

export interface State {
  toast?: ToastProps
  launchToast: (toastProps: ToastProps) => void
}