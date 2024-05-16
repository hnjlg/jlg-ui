import { InternalRuleItem, RuleItem, Value } from 'async-validator/dist-types/interface';
import { FormItemRule } from 'element-plus';

export declare type U_A_ValueTypes<T> = T[keyof T];
/**
 * 限制输入框只能输入指定位数的小数
 * @param {number} digit 小数位数，如果不填写就只限制是否是数字
 */
type T_DigitValidator = (digit: number | null) => RuleItem;
export declare const digitValidator: (digit?: number | null) => {
    validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => void;
    trigger: string;
};
/**
 * 表单开始日期校验
 * @param selectedRow 表单数据，需要包含开始日期和结束日期，将整个响应式数据传递进来
 * @param endKey 结束日期 field，默认为 endDate
 */
type T_StartDateValidatorForm = (formRef: any, selectedRow: any, endField?: string) => RuleItem;
export declare const startDateValidatorForm: (formRef: any, selectedRow: any, endField?: string) => {
    validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => void;
    trigger: string;
};
/**
 * 表单结束日期校验
 * @param selectedRow 表单数据，需要包含开始日期和结束日期，将整个响应式数据传递进来
 * @param startField 开始日期 field, 默认为 startDate
 */
type T_EndDateValidatorForm = (formRef: any, selectedRow: any, startField?: string) => RuleItem;
export declare const endDateValidatorForm: (formRef: any, selectedRow: any, startField?: string) => {
    validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => void;
    trigger: string;
};
/**
 * 表单设置的时间不能小于当前时间校验
 * @param  dataName 需要
 */
type T_GreaterDateNow = (dataName: string) => RuleItem;
export declare const greaterDateNow: (dataName: string) => {
    validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => void;
    trigger: string;
};
/**
 * 表单设置的时间不能大于当前时间校验
 * @param  dataName 需要
 * @param  tag 日期控制(true 日期选择器能选择当天时间)
 */
type T_LessDateNow = (dataName?: string, tag?: boolean) => RuleItem;
export declare const lessDateNow: (dataName?: string, tag?: boolean) => {
    validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => void;
    trigger: string;
};
/**
 * 弹窗组件开始日期校验
 * @param selectedRow 表单数据，需要包含开始日期和结束日期，将整个响应式数据传递进来
 * @param endKey 结束日期 field，默认为 endDate
 */
type T_StartDateValidator = (refData: any, endField?: string) => RuleItem;
export declare const startDateValidator: (refData: any, endField?: string) => {
    validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => void;
};
/**
 * 弹窗组件结束日期校验
 * @param selectedRow 表单数据，需要包含开始日期和结束日期，将整个响应式数据传递进来
 * @param startField 开始日期 field, 默认为 startDate
 */
type T_EndDateValidator = (refData: any, startField?: string) => RuleItem;
export declare const endDateValidator: (refData: any, startField?: string) => {
    validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => void;
};
/**
 * 输入的值是否为 http url
 */
type T_UrlValidator = (protocols?: Array<string>) => RuleItem;
export declare const urlValidator: () => {
    validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => void;
    trigger: string;
};
/**
 * 输入的值是否是一个合理的电子邮件地址。
 */
type T_EmailValidator = () => RuleItem;
export declare const emailValidator: () => {
    validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => void;
    trigger: string;
};
/**
 * 判断值长度是否为为指定值之间，输入数字会转换为字符串后计算长度
 * @param first 最小长度
 * @param second 最大长度
 */
type T_LengthValidator = (options: {
    first: number;
    second: number;
    outSideTrigger?: T_OutSideTrigger;
}) => RuleItem;
export declare const lengthValidator: (options: {
    first: number;
    second: number;
    outSideTrigger?: T_OutSideTrigger;
}) => {
    validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => void;
    trigger: string;
    outSideTrigger: T_OutSideTrigger;
};
/**
 * 输入的值是否小于最大值
 */
type T_MaxValidator = (maximum?: number) => RuleItem;
export declare const maxValidator: (maximum?: number) => {
    validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => boolean | void;
    trigger: string;
};
/**
 * 输入的值是否大于最小值。
 */
type T_MinValidator = (minimum?: number) => RuleItem;
export declare const minValidator: (minimum?: number) => {
    validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => boolean | void;
    trigger: string;
};
/**
 * 手机号码校验
 */
type T_MobileValidator = () => FormItemRule;
export declare const mobileValidator: () => {
    validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => void;
    trigger: string;
};
/**
 * 身份证号码校验
 * 支持一代身份证和二代身份证
 * */
export declare const idCardValidator: (mandatory?: boolean) => {
    validator: (rule: InternalRuleItem, value: Value, callback: (error?: string | Error) => void) => void;
    trigger: string;
};
/**
 * 金钱数字转换大写
 * */
export declare function cnMoneyFormat(money: any): string;
type T_RequiredValidator = () => {
    required: boolean;
    message: string;
};
export declare type T_OutSideTrigger = 'change' | 'blur' | 'default';
export declare const requiredValidator: T_RequiredValidator;
export declare type RecordFormItemRule = FormItemRule & {
    outSideTrigger?: T_OutSideTrigger;
};
export declare type T_FormValidatorRulesOptionRecord = Array<[E_FormValidatorRulesValidateFunEnum, ...any[]] | RecordFormItemRule | (() => RecordFormItemRule)> | {
    [k in string]: T_FormValidatorRulesOptionRecord;
};
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
export declare class FormValidatorRules implements I_FormValidatorRules {
    _options: I_FormValidatorRulesOptions;
    _validate: I_FormValidatorRulesValidateFunSet;
    [key: string]: T_FormValidatorRulesKey;
    constructor(options: I_FormValidatorRulesOptions);
    init(): void;
    transformOptionRecord(item: T_FormValidatorRulesOptionRecord | I_FormValidatorRulesOptions, key?: string): any;
    changeRecord(option: I_FormValidatorRulesOptions): void;
    getRecord(key: keyof I_FormValidatorRulesOptions): T_FormValidatorRulesOptionRecord;
}
export declare enum E_FormValidatorRulesValidateFunEnum {
    必填校验 = "requiredValidator",
    小数位校验 = "digitValidator",
    大于最小值校验 = "minValidator",
    小于最大值校验 = "maxValidator",
    长度范围校验 = "lengthValidator",
    电子邮箱校验 = "emailValidator",
    网站地址校验 = "urlValidator",
    结束日期校验 = "endDateValidator",
    开始日期校验 = "startDateValidator",
    不能大于当前日期校验 = "lessDateNow",
    不能小于当前日期校验 = "greaterDateNow",
    弹窗开始日期校验 = "startDateValidatorForm",
    弹窗结束日期校验 = "endDateValidatorForm",
    手机号码校验 = "mobileValidator"
}
export {};
