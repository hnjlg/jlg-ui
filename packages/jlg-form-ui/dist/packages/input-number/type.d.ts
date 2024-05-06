import { ElTooltipContentProps, InputNumberProps } from 'element-plus';

export declare type T_Jlg_InputNumber_Props = {
    toolTipProps?: ElTooltipContentProps;
} & InputNumberProps;
export declare interface I_Jlg_InputNumber_Emits {
    (e: 'update:modelValue', value: T_Jlg_InputNumber_Props['modelValue']): void;
}
