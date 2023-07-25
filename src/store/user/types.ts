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
  category: string
  date: string
  time?: string
  users?: string[]
}

export type State = User & {
  setPersonalData: (data: any) => void
  clearPersonalData: () => void
  addSchedule: (schedule: Schedule) => void
}