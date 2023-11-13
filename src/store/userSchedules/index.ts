import AsyncStorage from '@react-native-async-storage/async-storage'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import { Schedule } from '../user/types'

import {
  State,
  UserSchedules
} from './types'

const initialState: UserSchedules = {
  schedules: []
}

export const useUserSchedulesStore = create<State>()(
  persist(
    (set) => ({
      ...initialState,
      setSchedules: (schedules: Schedule[]) => set(() => ({
        schedules: [...schedules]
      })),
      addSchedule: (schedule: Schedule) => set((state) => ({
        schedules: [schedule, ...state.schedules]
      }))
    }),
    {
      name: 'user-schedules-store',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)
