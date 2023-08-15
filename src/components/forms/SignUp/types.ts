export type Props = {
  onSignUp: ({
    name,
    birthDate,
    photo
  }: handleSubmitProps) => void
}

type handleSubmitProps = {
  name: string
  birthDate: string
  photo: string
}
