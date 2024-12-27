// src/stores/useAlertStore.js
import { defineStore } from 'pinia';

export const useAlertStore = defineStore('alert', {
  state: () => ({
    alerts: [],
  }),
  actions: {
    addAlert(type, message, duration = 5000) {
      const id = Date.now();
      this.alerts.push({ id, type, message });

      // Automatically remove the alert after the specified duration
      setTimeout(() => {
        this.removeAlert(id);
      }, duration);
    },
    removeAlert(id) {
      this.alerts = this.alerts.filter(alert => alert.id !== id);
    },
  },
});
