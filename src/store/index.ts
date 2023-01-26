import { create } from 'zustand';

import { State, Schedule } from './types';

export const useStore = create<State>((set) => ({
  phoneNumber: '',
  name: '',
  birthDate: '',
  photo: '',
  connected: false,
  schedules: [],
  setPhoneNumber: (phoneNumber: string) => set((state) => ({ ...state, phoneNumber: phoneNumber })),
  setPersonalData: (name: string, birthDate: string, photo: string) => set((state) => ({
    ...state,
    name: name,
    birthDate: birthDate,
    photo: photo
  })),
  setIsConnected: (isConected: boolean) => set((state) => ({ ...state, connected: isConected })),
  createSchedule: (schedule: Schedule) => set((state) => ({
    ...state,
    schedules: [...state.schedules, schedule]
  }))
}));