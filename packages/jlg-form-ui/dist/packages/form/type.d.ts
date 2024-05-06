import { T_Jlg_TimeSelect_Props } from '../time-select/type';
import { T_Jlg_DatePicker_Props } from '../date-picker/type';
import { T_Jlg_InputNumber_Props } from '../input-number/type';
import { T_Jlg_Select_Props } from '../select/type';
import { T_Jlg_Input_Props } from '../input/type';
import { I_Grid_Layout_Props } from 'jlg-ui/dist/packages/grid-layout/type';
import { I_Grid_Cell_Props } from 'jlg-ui/dist/packages/grid-cell/type';
import { FormProps, FormItemProps, RadioGroupProps, RateProps, RadioProps } from 'element-plus';

export declare enum E_JlgForm_FormType {
	输入框 = 'input',
	数字输入框 = 'number',
	单选框 = 'radio',
	评分 = 'rate',
	选择框 = 'select',
	日期 = 'date-picker',
	时间 = 'time-select',
}
export declare interface I_JlgForm_FormJsonItem_Base {
	field: string | number;
	gridCellProps: I_Grid_Cell_Props;
	formItemProps?: FormItemProps;
}
export declare interface I_JlgForm_FormJsonItem_Input extends I_JlgForm_FormJsonItem_Base {
	type: E_JlgForm_FormType.输入框;
	elComponentsProps?: T_Jlg_Input_Props;
}
export declare interface I_JlgForm_FormJsonItem_InputNumber extends I_JlgForm_FormJsonItem_Base {
	type: E_JlgForm_FormType.数字输入框;
	elComponentsProps?: T_Jlg_InputNumber_Props;
}
export declare interface I_JlgForm_FormJsonItem_Radio extends I_JlgForm_FormJsonItem_Base {
	type: E_JlgForm_FormType.单选框;
	elComponentsProps: Partial<RadioGroupProps> & {
		radioOptions: (Partial<RadioProps> & {
			title: string | number | boolean;
		})[];
	};
}
export declare interface I_JlgForm_FormJsonItem_Rate extends I_JlgForm_FormJsonItem_Base {
	type: E_JlgForm_FormType.评分;
	elComponentsProps?: Partial<RateProps>;
}
export declare interface I_JlgForm_FormJsonItem_Select extends I_JlgForm_FormJsonItem_Base {
	type: E_JlgForm_FormType.选择框;
	elComponentsProps: T_Jlg_Select_Props;
}
export declare interface I_JlgForm_FormJsonItem_DatePicker extends I_JlgForm_FormJsonItem_Base {
	type: E_JlgForm_FormType.日期;
	elComponentsProps: T_Jlg_DatePicker_Props;
}
export declare interface I_JlgForm_FormJsonItem_TimeSelect extends I_JlgForm_FormJsonItem_Base {
	type: E_JlgForm_FormType.时间;
	elComponentsProps: T_Jlg_TimeSelect_Props;
}
export declare type T_JlgForm_FormJsonItem =
	| I_JlgForm_FormJsonItem_Input
	| I_JlgForm_FormJsonItem_InputNumber
	| I_JlgForm_FormJsonItem_Radio
	| I_JlgForm_FormJsonItem_Rate
	| I_JlgForm_FormJsonItem_Select
	| I_JlgForm_FormJsonItem_DatePicker
	| I_JlgForm_FormJsonItem_TimeSelect;
export declare type T_JlgForm_Props = {
	modelValue: object;
	formJson: T_JlgForm_FormJsonItem[];
	gridLayoutProps: I_Grid_Layout_Props;
} & FormProps;
