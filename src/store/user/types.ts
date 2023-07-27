export type User = {
  token: string
  id: string
  name: string
  birthDate: string
  phoneNumber: string
  avatar: string
  schedules: string[]
}

export type PersonalData = {
  token: string
  id: string
  name: string
  birthDate: string
  phoneNumber: string
  avatar: string
}

export type Schedule = {
  id?: string
  category: string
  date: string
  time?: string
  users?: string[]
}

export type State = User & {
  setPersonalData: (data: any) => void
  clearPersonalData: () => void
  addSchedule: (schedule: string) => void
}
