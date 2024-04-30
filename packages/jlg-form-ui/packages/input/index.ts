import JlgInput from './index.vue';
import type { App } from 'vue';
// 注册组件
JlgInput.install = (Vue: App) => {
	Vue.component(JlgInput.__name as string, JlgInput);
};

export default JlgInput;
