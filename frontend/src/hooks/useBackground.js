import {create} from 'zustand';

const useBackground = create((set) => ({
  isDark: true,
  setIsDark: (isDark) => set({ isDark }),
}));

export default useBackground;

