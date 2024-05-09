import { ElTooltipContentProps, InputProps } from 'element-plus';

export declare type T_Jlg_Input_Props = {
    tooltipProps?: ElTooltipContentProps;
    gatherProps?: object;
} & InputProps;
export declare interface I_Jlg_Input_Emits {
    (e: 'blur', event: FocusEvent): void;
    (e: 'update:modelValue', value: InputProps['modelValue']): void;
}
