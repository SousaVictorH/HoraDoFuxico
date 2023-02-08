import { create } from 'zustand';

import { State, PopUpProps } from './types';

export const usePopUpStore = create<State>((set) => ({
  showPopUp: false,
  popUp: undefined,
  setShowPopUp: (showPopUp: boolean) => set(() => ({ showPopUp: showPopUp })),
  launchPopUp: (popUp: PopUpProps) => {
    // launch pop up
    set((state) => ({
      ...state,
      popUp: popUp,
      showPopUp: true
    }))

    // after 3.5 seconds hide pop up
    setTimeout(() => set(() => ({ showPopUp: false })), 3500);
  }
}));