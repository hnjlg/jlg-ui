import { FormItemProps } from 'element-plus';
import { T_FormValidatorRulesOptionRecord } from '../rule';

export declare type T_Jlg_FormItem_Props = Omit<FormItemProps, 'required' | 'prop'> & {
	prop?: string;
	validateRules?: T_FormValidatorRulesOptionRecord;
};
