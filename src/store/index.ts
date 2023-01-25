import { create } from 'zustand';

export interface State {
  phoneNumber: string
  token: string
  name: string
  birthDate: string
  photo: string
  connected: boolean
  setPhoneNumber: (phoneNumber: string) => void
  setToken: (token: string) => void
  setPersonalData: (name: string, birthDate: string, photo: string) => void
  setIsConnected: (isConected: boolean) => void
}

export const useStore = create<State>((set) => ({
  phoneNumber: '',
  token: '',
  name: '',
  birthDate: '',
  photo: '',
  connected: false,
  setPhoneNumber: (phoneNumber: string) => set((state) => ({ ...state, phoneNumber: phoneNumber })),
  setToken: (token: string) => set((state) => ({ ...state, token: token })),
  setPersonalData: (name: string, birthDate: string, photo: string) => set((state) => ({
    ...state,
    name: name,
    birthDate: birthDate,
    photo: photo
  })),
  setIsConnected: (isConected: boolean) => set((state) => ({ ...state, connected: isConected })),
}));