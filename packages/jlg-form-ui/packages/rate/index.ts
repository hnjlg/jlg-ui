import JlgRate from './index.vue';
import type { App } from 'vue';
// 注册组件
JlgRate.install = (Vue: App) => {
	Vue.component(JlgRate.name as string, JlgRate);
};

export default JlgRate;
