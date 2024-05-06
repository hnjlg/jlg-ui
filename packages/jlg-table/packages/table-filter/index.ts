import JlgTableFilter from './index.vue';
import type { App } from 'vue';
// 注册组件
JlgTableFilter.install = (Vue: App) => {
	Vue.component(JlgTableFilter.name as string, JlgTableFilter);
};

export default JlgTableFilter;
