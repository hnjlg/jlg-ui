import { ElTooltipContentProps, SelectContext } from 'element-plus';

export declare type T_Jlg_Select_Props = {
	toolTipProps?: Partial<ElTooltipContentProps>;
} & SelectContext['props'];

export declare interface I_Jlg_Select_Emits {
	(e: 'update:modelValue', value: SelectContext['props']['modelValue']): void;
}
