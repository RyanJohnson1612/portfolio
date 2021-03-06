import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './styles/app.css';
import './index.css';
import './assets/tailwind.css';

createApp(App).use(store).use(router).mount("#app");
