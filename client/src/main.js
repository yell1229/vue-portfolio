import { createApp } from 'vue';
import { createPinia } from "pinia";
import App from './App.vue'

const app = createApp(App);
app.use(createPinia()); // Pinia 등록
app.mount("#app");
