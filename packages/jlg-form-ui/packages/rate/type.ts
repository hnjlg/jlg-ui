import { ElTooltipContentProps, RateProps } from 'element-plus';

export declare type T_Jlg_Rate_Props = {
	toolTipProps?: ElTooltipContentProps;
	gatherProps?: object;
} & RateProps;

export declare interface I_Jlg_Rate_Emits {
	(e: 'update:modelValue', v: T_Jlg_Rate_Props['modelValue']): void;
}
