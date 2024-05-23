import JlgFormItem from './index.vue';
import './index.scss';
import type { App } from 'vue';
// 注册组件
JlgFormItem.install = (Vue: App) => {
	Vue.component(JlgFormItem.name as string, JlgFormItem);
};

export default JlgFormItem;
