export type Props = {
  onSubmit: (value: string) => Promise<boolean>
  disabled?: boolean
  length: number
}
