export type Schedule = {
  title: string
  date: string
  time: string
}

export interface State {
  token: string
  id: string
  name: string
  dateOfBirth: string
  phoneNumber: string
  avatar: string
  schedules: Schedule[]
  setPersonalData: (data: any) => void
  createSchedule: (schedule: Schedule) => void
}