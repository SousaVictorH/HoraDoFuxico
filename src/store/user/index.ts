import { create } from 'zustand'

import {
  State,
  User,
  Schedule,
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
  setPersonalData: (data: PersonalData) => set((state) => ({
    ...state,
    ...data
  })),
  clearPersonalData: () => set(() => ({
    ...initialState
  })),
  setSchedules: (schedules: Schedule[]) => set(() => ({
    schedules: schedules
  }))
}));