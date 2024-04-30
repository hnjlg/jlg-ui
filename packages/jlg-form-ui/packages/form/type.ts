import { FormProps, FormItemProps, InputProps, InputNumberProps, RadioGroupProps, RateProps, ISelectProps, RadioProps } from 'element-plus';
import { I_Grid_Cell_Props } from 'jlg-ui/dist/packages/grid-cell/type';
import { I_Grid_Layout_Props } from 'jlg-ui/dist/packages/grid-layout/type';

export enum E_JlgForm_FormType {
	输入框 = 'input',
	数字输入框 = 'number',
	单选框 = 'radio',
	评分 = 'rate',
	选择框 = 'select',
}

export declare interface IOptionProps {
	value: string | number | boolean | object;
	label: string | number;
	disabled: boolean;
}

export declare interface I_JlgForm_FormJsonItem_Base {
	field: string | number;
	gridCellProps: I_Grid_Cell_Props;
	formItemProps?: Partial<FormItemProps>;
}

export declare interface I_JlgForm_FormJsonItem_Input extends I_JlgForm_FormJsonItem_Base {
	type: E_JlgForm_FormType.输入框;
	elComponentsProps?: Partial<InputProps>;
}

export declare interface I_JlgForm_FormJsonItem_InputNumber extends I_JlgForm_FormJsonItem_Base {
	type: E_JlgForm_FormType.数字输入框;
	elComponentsProps?: Partial<InputNumberProps>;
}

export declare interface I_JlgForm_FormJsonItem_Radio extends I_JlgForm_FormJsonItem_Base {
	type: E_JlgForm_FormType.单选框;
	elComponentsProps: Partial<RadioGroupProps> & {
		radioOptions: (Partial<RadioProps> & { title: string | number | boolean })[];
	};
}

export declare interface I_JlgForm_FormJsonItem_Rate extends I_JlgForm_FormJsonItem_Base {
	type: E_JlgForm_FormType.评分;
	elComponentsProps?: Partial<RateProps>;
}

export declare interface I_JlgForm_FormJsonItem_Select extends I_JlgForm_FormJsonItem_Base {
	type: E_JlgForm_FormType.选择框;
	elComponentsProps: Partial<ISelectProps> & { optionOptions: Partial<IOptionProps>[] };
}

export declare type T_JlgForm_FormJsonItem =
	| I_JlgForm_FormJsonItem_Input
	| I_JlgForm_FormJsonItem_InputNumber
	| I_JlgForm_FormJsonItem_Radio
	| I_JlgForm_FormJsonItem_Rate
	| I_JlgForm_FormJsonItem_Select;

export declare interface I_JlgForm_Props {
	modelValue: object;
	formJson: T_JlgForm_FormJsonItem[];
	gridLayoutProps: I_Grid_Layout_Props;
	formProps?: Partial<FormProps>;
}
