export type Props = {
  handleSubmit: (newName: string, newPhoneNumber: string, newBirthDate: string, newPhoto?: string) => void,
  name: string,
  phoneNumber: string,
  birthDate: string,
  photo: string,
}