import { create } from 'zustand';

import { State, Schedule } from './types';

export const useUserStore = create<State>((set) => ({
  token: '',
  id: '',
  name: '',
  dateOfBirth: '',
  phoneNumber: '',
  avatar: '',
  schedules: [],
  setPersonalData: (data) => set(() => ({
    ...data
  })),
  createSchedule: (schedule: Schedule) => set((state) => ({
    schedules: [...state.schedules, schedule]
  }))
}));