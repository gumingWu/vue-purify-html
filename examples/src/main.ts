import { createApp } from 'vue'
import App from './App.vue'
import { vuePurtifyHtml } from 'vue-purify-html';

createApp(App).use(vuePurtifyHtml).mount('#app')
