import { defineStore } from "pinia";

export const useTostAlert = defineStore('tost', {
    state: () => ({
        tost: false,
        message: null,
        titles: null,
    }),
    getters: {
        isIcon: (state) => state.tost,
    },
    actions: {
        postTost(title, message) {
            this.tost = false;
            this.titles = title
            clearTimeout(this._timeout); 
            this.message = message;
            this.tost = true; 

            this._timeout = setTimeout(() => {
                this.tost = false; 
            }, 9000);
        },

        // 
        removeTost(){
            this.tost = false;
        }
    },
});
