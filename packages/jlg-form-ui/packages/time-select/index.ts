import JlgTimeSelect from './index.vue';
import type { App } from 'vue';
// 注册组件
JlgTimeSelect.install = (Vue: App) => {
	Vue.component(JlgTimeSelect.__name as string, JlgTimeSelect);
};

export default JlgTimeSelect;
