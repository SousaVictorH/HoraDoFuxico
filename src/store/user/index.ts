import { create } from 'zustand'

import {
  State,
  User,
  PersonalData
} from './types'

const initialState: User = {
  token: '',
  id: '',
  name: '',
  birthDate: '',
  phoneNumber: '',
  avatar: '',
  schedules: [],
}

export const useUserStore = create<State>((set) => ({
  ...initialState,
  setPersonalData: (data: PersonalData) => set(() => ({
    ...data
  })),
  clearPersonalData: () => set(() => ({
    ...initialState
  })),
  addSchedule: (schedule: string) => set((state) => ({
    schedules: [schedule, ...state.schedules]
  }))
}))
