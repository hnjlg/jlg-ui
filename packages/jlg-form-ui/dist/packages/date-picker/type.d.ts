import { DatePickerProps, ElTooltipContentProps } from 'element-plus';

export declare type T_Jlg_DatePicker_Props = {
    tooltipProps?: ElTooltipContentProps;
    gatherProps?: object;
} & DatePickerProps;
export declare interface I_Jlg_DatePicker_Emits {
    (e: 'update:modelValue', v: T_Jlg_DatePicker_Props['modelValue']): void;
}
