import JlgDatePicker from './index.vue';
import type { App } from 'vue';
// 注册组件
JlgDatePicker.install = (Vue: App) => {
	Vue.component(JlgDatePicker.name as string, JlgDatePicker);
};

export default JlgDatePicker;
