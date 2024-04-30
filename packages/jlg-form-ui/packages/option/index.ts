import JlgOption from './index.vue';
import type { App } from 'vue';
// 注册组件
JlgOption.install = (Vue: App) => {
	Vue.component(JlgOption.__name as string, JlgOption);
};

export default JlgOption;
