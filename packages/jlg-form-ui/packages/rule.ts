import { InternalRuleItem, RuleItem, Value } from 'async-validator/dist-types/interface';
import { FormItemRule } from 'element-plus';
import { cloneDeep, isArray, isFunction, isObject, isRegExp, isString } from 'lodash-unified';

export declare type U_A_ValueTypes<T> = T[keyof T];
/**
 * 判断输入框输入的值是否为数字
 * @param {string} value
 */
const isNumber = (value: any) => !isNaN(value);

/**
 * 限制输入框只能输入指定位数的小数
 * @param {number} digit 小数位数，如果不填写就只限制是否是数字
 */
type T_DigitValidator = (digit: number | null) => RuleItem;
export const digitValidator = (digit: number | null = null) => ({
	validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => {
		if (!!value && !isNumber(value)) {
			callback(new Error('只能输入数字'));
		} else if (digit !== 0 && digit !== null && value && value.toString().split('.')[1]?.length > digit) {
			callback(new Error(`最多输入${digit}位小数`));
		} else if (digit === 0 && value && value.toString().split('.')[1]?.length > digit) {
			callback(new Error('只能输入整数'));
		} else {
			callback();
		}
	},
	trigger: 'blur',
});

/**
 * 表单开始日期校验
 * @param selectedRow 表单数据，需要包含开始日期和结束日期，将整个响应式数据传递进来
 * @param endKey 结束日期 field，默认为 endDate
 */
type T_StartDateValidatorForm = (formRef: any, selectedRow: any, endField?: string) => RuleItem;
export const startDateValidatorForm = (formRef: any, selectedRow: any, endField = 'endDate') => ({
	validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => {
		if (!selectedRow.value) {
			callback(new Error('校验失败，缺少必要参数'));
		} else if (!selectedRow.value[endField] && value) {
			// callback(new Error('请选择开始日期'));
			callback();
		} else if (selectedRow.value[endField] && value && new Date(selectedRow.value[endField]).getTime() < new Date(value).getTime()) {
			callback('开始日期不能大于结束日期');
		} else {
			callback();
			// 触发结束日期校验
			// formRef.value.validateField(endField);
		}
	},
	trigger: 'blur',
});

/**
 * 表单结束日期校验
 * @param selectedRow 表单数据，需要包含开始日期和结束日期，将整个响应式数据传递进来
 * @param startField 开始日期 field, 默认为 startDate
 */
type T_EndDateValidatorForm = (formRef: any, selectedRow: any, startField?: string) => RuleItem;

export const endDateValidatorForm = (formRef: any, selectedRow: any, startField = 'startDate') => ({
	validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => {
		if (!selectedRow.value) {
			callback(new Error('校验失败，缺少必要参数'));
		} else if (!selectedRow.value[startField] && value) {
			// callback(new Error('请选择开始日期'));
			callback();
		} else if (selectedRow.value[startField] && value && new Date(selectedRow.value[startField]).getTime() > new Date(value).getTime()) {
			callback('结束日期不能小于开始日期');
		} else {
			callback();
			// 触发开始日期校验
			// formRef.value.validateField(startField);
		}
	},
	trigger: 'blur',
});

/**
 * 表单设置的时间不能小于当前时间校验
 * @param  dataName 需要
 */
type T_GreaterDateNow = (dataName: string) => RuleItem;

export const greaterDateNow = (dataName: string) => ({
	validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => {
		const isError = new Date(value).getTime() <= Date.now() - 86400000;
		callback(isError ? dataName + '不能小于当前日期' : undefined);
	},
	trigger: 'blur',
});

/**
 * 表单设置的时间不能大于当前时间校验
 * @param  dataName 需要
 * @param  tag 日期控制(true 日期选择器能选择当天时间)
 */
type T_LessDateNow = (dataName?: string, tag?: boolean) => RuleItem;
export const lessDateNow = (dataName = '', tag = false) => ({
	validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => {
		let isError;
		if (tag) {
			isError = new Date(value).getTime() >= Number(new Date());
		} else {
			isError = new Date(value).getTime() >= Date.now() - 86400000;
		}
		callback(isError ? dataName + '不能大于当前日期' : undefined);
	},
	trigger: 'blur',
});

/**
 * 弹窗组件开始日期校验
 * @param selectedRow 表单数据，需要包含开始日期和结束日期，将整个响应式数据传递进来
 * @param endKey 结束日期 field，默认为 endDate
 */
type T_StartDateValidator = (refData: any, endField?: string) => RuleItem;

export const startDateValidator = (refData: any, endField = 'endDate') => ({
	validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => {
		const selectedRow = refData?.value?.modalData?.selectedRow ? refData.value.modalData.selectedRow : refData;
		if (!selectedRow) {
			callback(new Error('校验失败，缺少必要参数'));
		} else if (!selectedRow[endField] && value) {
			// callback(new Error('请选择结束日期'));
			callback();
		} else if (selectedRow[endField] && value && new Date(selectedRow[endField]).getTime() < new Date(value).getTime()) {
			callback('开始日期不能大于结束日期');
		} else {
			callback();
			// 触发开始日期校验
			// if (endField) {
			// 	refData.value.ruleFormRef.validateField(endField);
			// }
		}
	},
});

/**
 * 弹窗组件结束日期校验
 * @param selectedRow 表单数据，需要包含开始日期和结束日期，将整个响应式数据传递进来
 * @param startField 开始日期 field, 默认为 startDate
 */
type T_EndDateValidator = (refData: any, startField?: string) => RuleItem;
export const endDateValidator = (refData: any, startField = 'startDate') => ({
	validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => {
		const selectedRow = refData?.value?.modalData?.selectedRow ? refData.value.modalData.selectedRow : refData;
		if (!selectedRow) {
			callback(new Error('校验失败，缺少必要参数'));
		} else if (!selectedRow[startField] && value) {
			// callback(new Error('请选择开始日期'));
			callback();
		} else if (selectedRow[startField] && value && new Date(selectedRow[startField]).getTime() > new Date(value).getTime()) {
			callback('结束日期不能小于开始日期');
		} else {
			callback();
			// 触发开始日期校验
			// if (startField) {
			// 	refData.value.ruleFormRef.validateField(startField);
			// }
		}
	},
});

/**
 * 输入的值是否为 http url
 */
type T_UrlValidator = (protocols?: Array<string>) => RuleItem;

export const urlValidator = () => ({
	validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => {
		const pattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
		// 使用正则表达式测试URL
		if (!value || pattern.test(value)) {
			callback();
		} else {
			callback('请输入正确的URL如：https://www.baidu.com 或者 http://www.baidu.com');
		}
	},
	trigger: 'blur',
});

/**
 * 输入的值是否是一个合理的电子邮件地址。
 */
type T_EmailValidator = () => RuleItem;
export const emailValidator = () => ({
	validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => {
		// 不做必填校验
		if (!value) return callback();
		const isEmail =
			/^(([^<>()\\[\]\\.,;:\s@\\"]+(\.[^<>()\\[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i;
		return callback(!isEmail.test(String(value)) ? '请输入正确的邮箱' : undefined);
	},
	trigger: 'blur',
});

/**
 * 判断值长度是否为为指定值之间，输入数字会转换为字符串后计算长度
 * @param first 最小长度
 * @param second 最大长度
 */
type T_LengthValidator = (options: { first: number; second: number; outSideTrigger?: T_OutSideTrigger }) => RuleItem;
export const lengthValidator = (options: { first: number; second: number; outSideTrigger?: T_OutSideTrigger }) => {
	let { first, second } = options;
	if (!first) {
		first = 0;
	}
	return {
		validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => {
			const errorTxt = first === second ? `长度必须为 ${first}` : `长度必须为 ${first} - ${second} 之间`;
			first = parseInt(String(first));
			second = isNaN(parseInt(String(second))) ? Infinity : parseInt(String(second));
			const min = first <= second ? first : second;
			const max = second >= first ? second : first;
			// 如果是数字，需要转换为字符串
			const _value = isNumber(value) ? String(value) : value;
			// 是否校验成功
			let isSuccess = false;
			if (typeof _value === 'string' || Array.isArray(_value)) {
				isSuccess = _value.length >= min && _value.length <= max;
			} else if (_value && typeof _value === 'object') {
				const length = Object.keys(_value).length;
				isSuccess = length >= min && length <= max;
			} else if (_value === undefined || _value === null) {
				isSuccess = true;
			}
			return callback(!isSuccess ? errorTxt : undefined);
		},
		trigger: 'blur',
		outSideTrigger: options.outSideTrigger,
	};
};

/**
 * 输入的值是否小于最大值
 */
type T_MaxValidator = (maximum?: number) => RuleItem;
export const maxValidator = (maximum = 99) => ({
	validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => {
		if (Array.isArray(value)) {
			return value.length <= maximum;
		}
		return Number(value) <= Number(maximum) ? callback() : callback(`超出最大值${maximum}，请重新输入`);
	},
	trigger: 'blur',
});

/**
 * 输入的值是否大于最小值。
 */
type T_MinValidator = (minimum?: number) => RuleItem;
export const minValidator = (minimum = 1) => ({
	validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => {
		if (Array.isArray(value)) {
			return value.length >= minimum;
		}
		return Number(value ?? 0) >= Number(minimum ?? 0) ? callback() : callback(`低于最小值${minimum}，请重新输入`);
	},
	trigger: 'blur',
});

/**
 * 手机号码校验
 */
type T_MobileValidator = () => FormItemRule;
export const mobileValidator = () => ({
	validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => {
		// 不做必填校验
		if (!value) return callback();
		// 宽松匹配，只要是13,14,15,16,17,18,19开头的11位数字就行
		const isMobile = /^1[3456789]\d{9}$/;
		return callback(!isMobile.test(String(value)) ? '请输入正确的手机号码' : undefined);
	},
	trigger: 'blur',
});

/**
 * 身份证号码校验
 * 支持一代身份证和二代身份证
 * */
export const idCardValidator = (mandatory = false) => {
	return {
		validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => {
			if (mandatory && !value && value !== 0) {
				callback();
			} else {
				const isIdCard = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/;
				return callback(!isIdCard.test(String(value)) ? '请输入正确的身份证号码' : undefined);
			}
		},
		trigger: 'blur',
	};
};

/**
 * 金钱数字转换大写
 * */
export function cnMoneyFormat(money: any) {
	let cnMoney = '零元整';
	let strOutput = '';
	let strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
	money += '00';
	const intPos = money.indexOf('.');
	if (intPos >= 0) {
		money = money.substring(0, intPos) + money.substr(intPos + 1, 2);
	}
	strUnit = strUnit.substr(strUnit.length - money.length);
	for (let i = 0; i < money.length; i++) {
		strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(money.substr(i, 1), 1) + strUnit.substr(i, 1);
	}
	cnMoney = strOutput
		.replace(/零角零分$/, '整')
		.replace(/零[仟佰拾]/g, '零')
		.replace(/零{2,}/g, '零')
		.replace(/零([亿|万])/g, '$1')
		.replace(/零+元/, '元')
		.replace(/亿零{0,3}万/, '亿')
		.replace(/^元/, '零元');
	return cnMoney;
}

type T_RequiredValidator = () => {
	required: boolean;
	message: string;
};

export declare type T_OutSideTrigger = 'change' | 'blur' | 'default';

export const requiredValidator: T_RequiredValidator = () => ({ required: true, message: '必填项' });

export declare type RecordFormItemRule = FormItemRule & { outSideTrigger?: T_OutSideTrigger };

export declare type T_FormValidatorRulesOptionRecord =
	| Array<[E_FormValidatorRulesValidateFunEnum, ...any[]] | RecordFormItemRule | (() => RecordFormItemRule)>
	| { [k in string]: T_FormValidatorRulesOptionRecord };

export interface I_FormValidatorRulesOptions {
	[k: string]: T_FormValidatorRulesOptionRecord;
}

export interface I_FormValidatorRulesValidateFunSet {
	minValidator: T_MinValidator;
	requiredValidator: T_RequiredValidator;
	digitValidator: T_DigitValidator;
	maxValidator: T_MaxValidator;
	lengthValidator: T_LengthValidator;
	emailValidator: T_EmailValidator;
	urlValidator: T_UrlValidator;
	endDateValidator: T_EndDateValidator;
	startDateValidator: T_StartDateValidator;
	lessDateNow: T_LessDateNow;
	greaterDateNow: T_GreaterDateNow;
	startDateValidatorForm: T_StartDateValidatorForm;
	endDateValidatorForm: T_EndDateValidatorForm;
	mobileValidator: T_MobileValidator;
	[k: string]: any;
}

export declare type T_FormValidatorRulesKey = U_A_ValueTypes<I_FormValidatorRules>;

interface I_FormValidatorRules {
	_options: I_FormValidatorRulesOptions;
	_validate: I_FormValidatorRulesValidateFunSet;
	init: () => void;
	transformOptionRecord: (option: T_FormValidatorRulesOptionRecord, key?: string) => any;
	changeRecord: (option: I_FormValidatorRulesOptions) => void;
	getRecord: (key: keyof I_FormValidatorRulesOptions) => T_FormValidatorRulesOptionRecord;
}
export class FormValidatorRules implements I_FormValidatorRules {
	_options: I_FormValidatorRulesOptions;

	_validate: I_FormValidatorRulesValidateFunSet = {
		minValidator,
		requiredValidator,
		digitValidator,
		maxValidator,
		lengthValidator,
		emailValidator,
		urlValidator,
		endDateValidator,
		startDateValidator,
		lessDateNow,
		greaterDateNow,
		startDateValidatorForm,
		endDateValidatorForm,
		mobileValidator,
	};

	// eslint-disable-next-line no-undef
	[key: string]: T_FormValidatorRulesKey;

	constructor(options: I_FormValidatorRulesOptions) {
		this._options = options;
		this.init();
	}

	// 初始化
	init() {
		const options = this._options;
		for (const key in options) {
			if (Object.prototype.hasOwnProperty.call(options, key)) {
				const element = options[key];
				this[key] = this.transformOptionRecord(element, key);
			}
		}
	}

	// 转换配置
	transformOptionRecord(item: T_FormValidatorRulesOptionRecord | I_FormValidatorRulesOptions, key?: string): any {
		if (isArray(item)) {
			if (item.some((item2) => isString(item2))) {
				return this._validate[item[0] as unknown as string]?.(...item.slice(1, item.length));
			} else {
				return item.map((item2: any) => this.transformOptionRecord(item2));
			}
		} else if (isFunction(item)) {
			if (key === 'validator') {
				return item;
			} else {
				return (item as () => FormItemRule)();
			}
		} // 是否是一个正则
		else if (isRegExp(item)) {
			return item;
		} else if (isObject(item)) {
			const obj: { [k: string]: FormItemRule } = {};
			for (const key in item) {
				if (Object.prototype.hasOwnProperty.call(item, key)) {
					const element = item[key];
					obj[key] = this.transformOptionRecord(element, key);
				}
			}
			return obj;
		} else {
			return item;
		}
	}

	// 修改字段
	changeRecord(option: I_FormValidatorRulesOptions) {
		const result = this.transformOptionRecord(option);
		this._options = { ...this._options, ...option };
		for (const key in result) {
			if (Object.prototype.hasOwnProperty.call(result, key)) {
				const element = result[key];
				this[key] = element;
			}
		}
	}

	// 获取字段的配置
	getRecord(key: keyof I_FormValidatorRulesOptions): T_FormValidatorRulesOptionRecord {
		return cloneDeep(this._options[key] ?? []);
	}
}

export enum E_FormValidatorRulesValidateFunEnum {
	必填校验 = 'requiredValidator',
	小数位校验 = 'digitValidator',
	大于最小值校验 = 'minValidator',
	小于最大值校验 = 'maxValidator',
	长度范围校验 = 'lengthValidator',
	电子邮箱校验 = 'emailValidator',
	网站地址校验 = 'urlValidator',
	结束日期校验 = 'endDateValidator',
	开始日期校验 = 'startDateValidator',
	不能大于当前日期校验 = 'lessDateNow',
	不能小于当前日期校验 = 'greaterDateNow',
	弹窗开始日期校验 = 'startDateValidatorForm',
	弹窗结束日期校验 = 'endDateValidatorForm',
	手机号码校验 = 'mobileValidator',
}
