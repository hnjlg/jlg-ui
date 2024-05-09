import { createApp } from 'vue';
import App from './App.vue';
import '@pac/theme.scss';
import '../styles/cssvar.scss';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';
import 'element-plus/dist/index.css';
import '@/assets/icons/iconfont.js';
import '@/assets/icons/iconfont.css';
import '@/styles/reset.scss';

function useTable(app) {
	app.use(VXETable);
}

const app = createApp(App);
app.use(useTable).mount('#app');
