import JlgTooltip from './index.vue';
import type { App } from 'vue';
// 注册组件
JlgTooltip.install = (Vue: App) => {
	Vue.component(JlgTooltip.__name as string, JlgTooltip);
};

export default JlgTooltip;
