export type User = {
  token: string
  id: string
  name: string
  birthDate: string
  phoneNumber: string
  avatar: string
  schedules: Schedule[]
}

export type Schedule = {
  title: string
  date: string
  time: string
}

export type State = User & {
  setPersonalData: (data: any) => void
  clearPersonalData: () => void
  createSchedule: (schedule: Schedule) => void
}