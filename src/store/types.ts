export type Schedule = {
  title: string
  date: string
  time: string
}

export interface State {
  phoneNumber: string
  token: string
  name: string
  birthDate: string
  photo: string
  connected: boolean
  schedules: Schedule[]
  setPhoneNumber: (phoneNumber: string) => void
  setToken: (token: string) => void
  setPersonalData: (name: string, birthDate: string, photo: string) => void
  setIsConnected: (isConected: boolean) => void
  createSchedule: (schedule: Schedule) => void
}