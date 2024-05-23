import JlgSelect from './index.vue';
import type { App } from 'vue';
// 注册组件
JlgSelect.install = (Vue: App) => {
	Vue.component(JlgSelect.name as string, JlgSelect);
};

export default JlgSelect;
