import { create } from 'zustand'

import { State, PopUpProps } from './types'

export const usePopUpStore = create<State>((set) => ({
  popUp: undefined,
  launchPopUp: (popUp: PopUpProps) => {
    set((state) => ({
      ...state,
      popUp: popUp,
      showPopUp: true
    }))
  }
}))
