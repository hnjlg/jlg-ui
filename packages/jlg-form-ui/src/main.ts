import { createApp } from 'vue';
import App from '@/App.vue';
import JlgFormUI from '@pac/index';

const app = createApp(App);

app.use(JlgFormUI);

app.mount('#app');
