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
      })),
      removeSchedule: (scheduleId: string) => set((state) => ({
        schedules: state.schedules.filter((schedule: Schedule) => {
          return schedule?.id !== scheduleId
        })
      }))
    }),
    {
      name: 'user-schedule-store',
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
)
