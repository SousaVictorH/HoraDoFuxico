import { create } from 'zustand';

import { State, PopUpProps } from './types';

let lastTimeOutId: any = undefined

export const usePopUpStore = create<State>((set) => ({
  showPopUp: false,
  popUp: undefined,
  setShowPopUp: (showPopUp: boolean) => set(() => ({ showPopUp: showPopUp })),
  launchPopUp: (popUp: PopUpProps) => {
    // reset all
    set(() => ({ showPopUp: false }))
    window.clearTimeout(lastTimeOutId)

    // launch pop up
    setTimeout(() => set((state) => ({
      ...state,
      popUp: popUp,
      showPopUp: true
    })), 200);

    // bigger timeout for info pop up
    const timeOut = popUp.type === 'INFO' ? 3500 :
      popUp.type === 'WARNING' ? 2500 :
        1500

    // after 3.5 seconds hide pop up
    lastTimeOutId = setTimeout(() => set(() => ({ showPopUp: false })), timeOut);
  }
}));