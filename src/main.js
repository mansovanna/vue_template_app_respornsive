import { createApp, markRaw } from "vue";
import App from "./App.vue";
import "./assets/app.css";
import router from "./router";
import { createPinia } from "pinia";


// Create Pinia instance
const pinia = createPinia();

// Add a plugin to include `router` in Pinia stores
pinia.use(({ store }) => {
  store.router = markRaw(router); // Mark router as raw to avoid Vue's reactivity
});

// Create Vue app
const app = createApp(App);
app.use(pinia);
app.use(router);

app.mount("#app");
