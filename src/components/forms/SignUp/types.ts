export type Props = {
  onSignUp: ({
    name,
    age,
    photo
  }: handleSubmitProps) => void
}

type handleSubmitProps = {
  name: string
  age: number
  photo: string
}