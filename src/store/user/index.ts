import AsyncStorage from '@react-native-async-storage/async-storage'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

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

export const useUserStore = create<State>()(
  persist(
    (set) => ({
      ...initialState,
      setPersonalData: (data: PersonalData) => set((state) => ({
        ...state,
        ...data
      })),
      clearPersonalData: () => set(() => ({
        ...initialState
      })),
      addSchedule: (schedule: string) => set((state) => ({
        ...state,
        schedules: [schedule, ...state.schedules]
      }))
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)
