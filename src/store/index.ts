import { create } from 'zustand';

import { State, Schedule } from './types';

export const useStore = create<State>((set) => ({
  phoneNumber: '',
  token: '',
  name: '',
  birthDate: '',
  photo: '',
  connected: false,
  schedules: [],
  setPhoneNumber: (phoneNumber: string) => set((state) => ({ ...state, phoneNumber: phoneNumber })),
  setToken: (token: string) => set((state) => ({ ...state, token: token })),
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