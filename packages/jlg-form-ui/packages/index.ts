import { App } from 'vue';
import 'jlg-ui/dist/style.css';
import JlgInput from './input';
import JlgForm from './form'; // 引入封装好的组件
import JlgDatePicker from './date-picker';
import JlgFormItem from './form-item';
import JlgOption from './option';
import JlgSelect from './select';
import JlgTimeSelect from './time-select';
import JlgInputNumber from './input-number';
import JlgTooltip from './tooltip';
import JlgRate from './rate';
import JlgRadioGroup from './radio-group';
import JlgRadio from './radio';
import { T_Jlg_DatePicker_Props } from './date-picker/type';
import { T_Jlg_InputNumber_Props } from './input-number/type';
import { T_Jlg_TimeSelect_Props } from './time-select/type';
import { T_Jlg_Select_Props } from './select/type';
import { T_Jlg_Input_Props } from './input/type';
import { T_Jlg_Tooltip_Props } from './tooltip/type';
import { T_JlgForm_Props } from './form/type';
import { I_Jlg_Option_Props } from './option/type';
import { T_Jlg_FormItem_Props } from './form-item/type';
import { T_Jlg_Rate_Props } from './rate/type';
import { T_Jlg_RadioGroup_Props } from './radio-group/type';
import { T_Jlg_Radio_Props } from './radio/type';
import { FormValidatorRules } from './rule';
export * from './rule';

export {
	JlgForm,
	JlgDatePicker,
	JlgFormItem,
	JlgInput,
	JlgOption,
	JlgSelect,
	JlgTimeSelect,
	JlgInputNumber,
	JlgTooltip,
	JlgRate,
	JlgRadioGroup,
	JlgRadio,
	FormValidatorRules,
}; //实现按需引入*

const components = [
	JlgForm,
	JlgDatePicker,
	JlgFormItem,
	JlgInput,
	JlgOption,
	JlgSelect,
	JlgTimeSelect,
	JlgInputNumber,
	JlgTooltip,
	JlgRate,
	JlgRadioGroup,
	JlgRadio,
];

type DeepPartial<T> = {
	[U in keyof T]?: T[U] extends object ? DeepPartial<T[U]> : T[U];
};

interface I_Global_Component_Config {
	tooltip: Partial<T_Jlg_Tooltip_Props>;
	form: DeepPartial<T_JlgForm_Props>;
	formItem: DeepPartial<T_Jlg_FormItem_Props>;
	input: DeepPartial<T_Jlg_Input_Props>;
	select: DeepPartial<T_Jlg_Select_Props>;
	option: DeepPartial<I_Jlg_Option_Props>;
	timeSelect: DeepPartial<T_Jlg_TimeSelect_Props>;
	inputNumber: DeepPartial<T_Jlg_InputNumber_Props>;
	datePicker: DeepPartial<T_Jlg_DatePicker_Props>;
	rate: DeepPartial<T_Jlg_Rate_Props>;
	radioGroup: DeepPartial<T_Jlg_RadioGroup_Props>;
	radio: DeepPartial<T_Jlg_Radio_Props>;
}

export const globalComponentConfig: I_Global_Component_Config = {
	tooltip: {
		showAfter: 600,
		placement: 'top',
		effect: 'dark',
	},
	form: {},
	formItem: {},
	input: {
		showWordLimit: false,
		clearable: true,
	},
	select: {
		placeholder: '',
	},
	option: {},
	timeSelect: {},
	inputNumber: {},
	datePicker: {},
	rate: {},
	radioGroup: {},
	radio: {},
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
// if (typeof window !== 'undefined' && (window as any).Vue) {
// 	install((window as any).Vue);
// }

if (typeof window !== 'undefined' && (window as any).Vue) {
	(window as any).JlgFormUi = { install };
}

export default { install }; // 批量的引入*
