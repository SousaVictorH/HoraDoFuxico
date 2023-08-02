export type Props = {
  onSubmit: (token: string) => Promise<boolean>
  onResendCode: () => void
}
