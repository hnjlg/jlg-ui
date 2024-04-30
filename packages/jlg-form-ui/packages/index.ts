import { ElTooltipContentProps, InputProps, SelectContext } from 'element-plus';
import { App } from 'vue';
import 'jlg-ui/dist/style.css';
import JlgInput from './input';
import JlgForm from './form'; // 引入封装好的组件
import JlgDatePicker from './date-picker';
import JlgFormItem from './form-item';
import JlgOption from './option';
import JlgSelect from './select';
import JlgTimeSelect from './time-select';

export { JlgForm, JlgDatePicker, JlgFormItem, JlgInput, JlgOption, JlgSelect, JlgTimeSelect }; //实现按需引入*

const components = [JlgForm, JlgDatePicker, JlgFormItem, JlgInput, JlgOption, JlgSelect, JlgTimeSelect]; // 将来如果有其它组件,都可以写到这个数组里

interface I_Global_Component_Config {
	tooltip: Partial<ElTooltipContentProps>;
	input: Partial<InputProps>;
	select: Partial<SelectContext['props']>;
}

export const globalComponentConfig: I_Global_Component_Config = {
	tooltip: {
		showAfter: 600,
		placement: 'top',
		effect: 'dark',
	},
	input: {
		showWordLimit: false,
		clearable: true,
	},
	select: {
		placeholder: '',
	},
};

const traversalReplacement = (source, oldConfig, key?: string) => {
	if (typeof source !== 'object' || source == null) {
		return source;
	}
	const target = key ? oldConfig[key] : oldConfig;
	for (const key in source) {
		if (Object.prototype.hasOwnProperty.call(source, key)) {
			if (typeof source[key] === 'object' && source[key] !== null) {
				target[key] = traversalReplacement(source[key], target, key);
			} else {
				target[key] = source[key];
			}
		}
	}
};

const install = function (
	app: App<Element>,
	config?: {
		componentConfig?: I_Global_Component_Config;
	}
) {
	components.forEach((component) => {
		if (!component.name) return;
		app.component(component.name, component);
	});
	// 自定义组件默认配置
	if (config && config.componentConfig) {
		traversalReplacement(config.componentConfig, globalComponentConfig);
	}
	Object.freeze(globalComponentConfig);
};

// 支持使用标签的方式引入
if (typeof window !== 'undefined' && (window as any).Vue) {
	install((window as any).Vue);
}

export default { install }; // 批量的引入*
