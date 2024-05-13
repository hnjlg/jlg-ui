import { App } from 'vue';
import JlgTable from './table-base/index.vue'; // 引入封装好的组件

export { JlgTable }; //实现按需引入*

const components = [JlgTable]; // 将来如果有其它组件,都可以写到这个数组里

const install = function (app: App<Element>) {
	components.forEach((component) => {
		if (!component.name) return;
		app.component(component.name, component);
	});
};

// 支持使用标签的方式引入
if (typeof window !== 'undefined' && (window as any).Vue) {
	install((window as any).Vue);
}

export default { install }; // 批量的引入*
