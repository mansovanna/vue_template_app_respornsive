import { defineStore } from "pinia";

export const useScreens = defineStore("screenDimensions", {
  state: () => ({
    screenW: typeof window !== "undefined" ? window.innerWidth : 0,
    screenH: typeof window !== "undefined" ? window.innerHeight : 0,
  }),

  getters: {
    isHighScreen: (state) => state.screenH > 1080, 
    screenStates: (state) => ({
      width: state.screenW,
      height: state.screenH,
    }),
  },

  actions: {
    updateScreens() {
      if (typeof window !== "undefined") {
        this.screenW = window.innerWidth;
        this.screenH = window.innerHeight;
      }
    },
  },
});
