import { I_Jlg_Option_Props } from '../option/type';
import { ElTooltipContentProps, SelectContext } from 'element-plus';

export declare type T_Jlg_Select_Props = {
    tooltipProps?: ElTooltipContentProps;
    optionOptions?: I_Jlg_Option_Props[];
    gatherProps?: object;
} & SelectContext['props'];
export declare interface I_Jlg_Select_Emits {
    (e: 'update:modelValue', value: SelectContext['props']['modelValue']): void;
}
