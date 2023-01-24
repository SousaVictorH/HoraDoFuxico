import { create } from 'zustand';

export interface State {
  phoneNumber: string
  token: string
  name: string
  birthDate: string
  photo: string
  setPhoneNumber: (phoneNumber: string) => void
  setToken: (token: string) => void
  setPersonalData: (name: string, birthDate: string, photo: string) => void
}

export const useStore = create<State>((set) => ({
  phoneNumber: '',
  token: '',
  name: '',
  birthDate: '',
  photo: '',
  setPhoneNumber: (phoneNumber: string) => set((state) => ({ ...state, phoneNumber: phoneNumber })),
  setToken: (token: string) => set((state) => ({ ...state, token: token })),
  setPersonalData: (name: string, birthDate: string, photo: string) => set((state) => ({
    ...state,
    name: name,
    birthDate: birthDate,
    photo: photo
  }))
}));