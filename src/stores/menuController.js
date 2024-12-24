import { defineStore } from "pinia";

export const useMenuSlot = defineStore("menuControl", {
    state: () => ({
        // Parse localStorage value to a boolean
        isMenuController: JSON.parse(localStorage.getItem("themeMenu")) || false,
      }),
    
      getters: {
        // Return the current menu state
        isOnOff: (state) => state.isMenuController,
      },
    
      actions: {
        // Toggle menu controller
        controllerMenuIsOn() {
          this.isMenuController = !this.isMenuController;
          localStorage.setItem("themeMenu", JSON.stringify(this.isMenuController));
        },


     
      },
});