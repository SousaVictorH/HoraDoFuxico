import { Schedule } from '../user/types'

export type UserSchedules = {
  schedules: Schedule[]
}

export type State = UserSchedules & {
  setSchedules: (schedules: Schedule[]) => void
  addSchedule: (schedule: Schedule) => void
}
