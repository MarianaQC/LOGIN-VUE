// ============================================
// ARCHIVO: src/main.ts
// Punto de entrada
// ============================================

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');