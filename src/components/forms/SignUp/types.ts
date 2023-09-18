export type Props = {
  initialPhoneNumber?: string,
  initialName?: string,
  initialPhoto?: string,
  showPhoneInput: boolean,
  onSignUp: ({
    name,
    birthDate,
    photo,
    phoneNumber
  }: handleSubmitProps) => void
}

type handleSubmitProps = {
  name: string
  birthDate: string
  photo: string
  phoneNumber: string
}
