import { create } from 'zustand'

interface UIStates {
  exiting: boolean
}

interface UIStore extends UIStates {
  setState: (newState: Partial<UIStates>) => void
}

const useUI = create<UIStore>(set => ({
  exiting: false,
  setState: newState => set(state => ({ ...state, ...newState }))
}))

export default useUI
