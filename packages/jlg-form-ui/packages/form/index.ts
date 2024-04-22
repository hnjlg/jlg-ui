import JlgForm from './index.vue';
import type { App } from 'vue';
import 'jlg-ui/dist/style.css';
// 注册组件
JlgForm.install = (Vue: App) => {
	Vue.component(JlgForm.__name as string, JlgForm);
};

export default JlgForm;
