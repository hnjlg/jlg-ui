import { createApp, App } from 'vue';
import AppComponent from '@/App.vue';
import VXETable from 'vxe-table';
import 'vxe-table/lib/style.css';

function useTable(app: App) {
	app.use(VXETable);
}

createApp(AppComponent).use(useTable).mount('#app');
