import { create } from 'zustand';

import { State, Schedule } from './types';

export const useUserStore = create<State>((set) => ({
  token: '',
  id: '',
  name: '',
  birthDate: '',
  phoneNumber: '',
  avatar: '',
  schedules: [],
  setPersonalData: (data) => set(() => ({
    ...data
  })),
  clearPersonalData: () => set(() => ({
    token: '',
    id: '',
    name: '',
    birthDate: '',
    phoneNumber: '',
    avatar: '',
    schedules: [],
  })),
  addSchedule: (schedule: Schedule) => set((state) => ({
    schedules: [...state.schedules, schedule]
  }))
}));