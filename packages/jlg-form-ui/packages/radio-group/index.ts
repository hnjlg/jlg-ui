import JlgRadioGroup from './index.vue';
import type { App } from 'vue';
// 注册组件
JlgRadioGroup.install = (Vue: App) => {
	Vue.component(JlgRadioGroup.__name as string, JlgRadioGroup);
};

export default JlgRadioGroup;
