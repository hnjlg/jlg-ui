import { ElTooltipContentProps, InputProps } from 'element-plus';

export declare type T_Jlg_Input_Props = {
    toolTipProps?: ElTooltipContentProps;
} & InputProps;
export declare interface I_Jlg_Input_Emits {
    (e: 'focus', event: FocusEvent): void;
    (e: 'blur', event: FocusEvent): void;
    (e: 'update:modelValue', value: InputProps['modelValue']): void;
}
