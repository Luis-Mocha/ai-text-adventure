import { createApp } from 'vue'

import App from './App.vue'

// importo vue router
import router from './router/router'

//importo bootstrap js
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// createApp(App).mount('#app')
createApp(App).use(router).mount('#app')