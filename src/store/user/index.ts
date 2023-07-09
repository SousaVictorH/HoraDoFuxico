import { create } from 'zustand';

import { State, Schedule } from './types';

export const useUserStore = create<State>((set) => ({
  phoneNumber: '',
  name: '',
  birthDate: '',
  photo: '',
  connected: false,
  schedules: [],
  setPhoneNumber: (phoneNumber: string) => set(() => ({ phoneNumber: phoneNumber })),
  setPersonalData: (name: string, birthDate: string, photo: string) => set(() => ({
    name: name,
    birthDate: birthDate,
    photo: photo
  })),
  setIsConnected: (isConected: boolean) => set(() => ({ connected: isConected })),
  createSchedule: (schedule: Schedule) => set((state) => ({
    ...state,
    schedules: [...state.schedules, schedule]
  }))
}));