import { T_FormValidatorRulesOptionRecord } from '../rule';
import { FormItemProps } from 'element-plus';

export declare type T_Jlg_FormItem_Props = Omit<FormItemProps, 'required' | 'prop'> & {
    prop?: string;
    validateRules?: T_FormValidatorRulesOptionRecord;
};
