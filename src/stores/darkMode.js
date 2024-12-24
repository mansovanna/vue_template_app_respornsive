import { defineStore } from "pinia";

export const useDarkModeStore = defineStore('darkMode', {
  state: () => ({
    darkMode: JSON.parse(localStorage.getItem('darkMode')) ?? window.matchMedia('(prefers-color-scheme: dark)').matches,
  }),
  getters: {
    isDarkMode: (state) => state.darkMode,
  },
  actions: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      try {
        localStorage.setItem('darkMode', JSON.stringify(this.darkMode));
      } catch (e) {
        console.error('Unable to access localStorage:', e);
      }
      this.applyDarkMode();
    },
    applyDarkMode() {
      if (this.darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
  },
});

// Automatically apply dark mode on initialization
const store = useDarkModeStore();
store.applyDarkMode();
