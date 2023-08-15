import { Schedule } from 'store/user/types'

export type Props = {
  onSubmit: (props: Schedule) => Promise<boolean>
  isLoading: boolean
}
