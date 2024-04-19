import { createApp } from 'vue';
import App from '@/App.vue';
import Router from '@/router';
import 'normalize.css';
import 'jlg-form-ui/dist/style.css';

const app = createApp(App);
app.use(Router).mount('#app');
