import { create } from 'zustand'

import { Schedule } from '../user/types'

import {
  State,
  UserSchedules
} from './types'

const initialState: UserSchedules = {
  schedules: []
}

export const useUserSchedulesStore = create<State>()(
  (set) => ({
    ...initialState,
    setSchedules: (schedules: Schedule[]) => set(() => ({
      schedules: [...schedules]
    })),
    addSchedule: (schedule: Schedule) => set((state) => ({
      schedules: [schedule, ...state.schedules]
    }))
  })
)
