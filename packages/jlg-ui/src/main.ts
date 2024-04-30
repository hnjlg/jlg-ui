import { createApp } from 'vue';
import App from '@/App.vue';
import '@pac/theme.scss';
import JlgUI from '@pac/index';

const app = createApp(App);

app.use(JlgUI);
app.mount('#app');
