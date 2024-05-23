import JlgForm from './index.vue';
import type { App } from 'vue';
// 注册组件
JlgForm.install = (Vue: App) => {
	Vue.component(JlgForm.name as string, JlgForm);
};

export default JlgForm;
