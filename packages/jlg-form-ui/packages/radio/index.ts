import JlgRadio from './index.vue';
import type { App } from 'vue';
// 注册组件
JlgRadio.install = (Vue: App) => {
	Vue.component(JlgRadio.name as string, JlgRadio);
};

export default JlgRadio;
