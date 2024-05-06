import { TimeSelectProps } from 'element-plus/es/components/time-select/src/time-select.mjs';
import { ElTooltipContentProps } from 'element-plus';

export declare type T_Jlg_TimeSelect_Props = {
    toolTipProps?: ElTooltipContentProps;
    gatherProps?: object;
} & TimeSelectProps;
export declare interface I_Jlg_TimeSelect_Emits {
    (e: 'update:modelValue', v: T_Jlg_TimeSelect_Props['modelValue']): void;
}
