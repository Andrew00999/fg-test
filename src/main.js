import { createApp } from "vue";
import App from "./App.vue";
// import store from "./store";
import components from "@/components/UI";

const app = createApp(App);

// Global registration of UI components
components.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
