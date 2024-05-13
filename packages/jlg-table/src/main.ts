import { createApp } from 'vue';
import App from './App.vue';
import '../styles/cssvar.scss';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';
import 'element-plus/dist/index.css';
import '@/assets/icons/iconfont.js';
import '@/assets/icons/iconfont.css';
import '../styles/reset.scss';
import '../styles/index.scss';

import ModalTemplate from '../packages/modal/modal-template.vue';
import { globalSetup } from '../lib/config';
// ModalTempate 设置为全局组件

function useTable(app) {
	app.component(ModalTemplate.name, ModalTemplate);
	app.use(VXETable);
	globalSetup();
}

const app = createApp(App);
app.use(useTable).mount('#app');
