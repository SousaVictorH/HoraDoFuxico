export type Props = {
  onSignIn: (arg: OnSignInProps) => void
  onSocialSignIn: (arg: OnSocialSignInProps) => void
}

type OnSignInProps = {
  areaCode: string
  phoneNumber: string
}

type OnSocialSignInProps = {
  google: boolean
  facebook: boolean
}
