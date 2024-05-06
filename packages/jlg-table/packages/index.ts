import { App } from 'vue';
import './theme.scss';
import JlgMenu from './menu'; // 引入封装好的组件
import JlgGridLayout from './grid-layout';
import JlgGridCell from './grid-cell';

export { JlgMenu, JlgGridLayout, JlgGridCell }; //实现按需引入*

const components = [JlgMenu, JlgGridLayout, JlgGridCell]; // 将来如果有其它组件,都可以写到这个数组里

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
