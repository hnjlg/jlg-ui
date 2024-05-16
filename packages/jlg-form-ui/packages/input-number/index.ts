import JlgInputNumber from './index.vue';
import type { App } from 'vue';
// 注册组件
JlgInputNumber.install = (Vue: App) => {
	Vue.component(JlgInputNumber.name as string, JlgInputNumber);
};

export default JlgInputNumber;
