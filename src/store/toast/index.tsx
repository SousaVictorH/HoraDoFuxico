import { create } from 'zustand'

import { State, ToastProps } from './types'

export const useToastStore = create<State>((set) => ({
  toast: undefined,
  launchToast: (toast: ToastProps) => {
    set((state) => ({
      ...state,
      toast
    }))
  }
}))
