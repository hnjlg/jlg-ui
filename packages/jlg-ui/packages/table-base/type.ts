import { VxeGridInstance, VxeGridProps, VxeToolbarPropTypes } from 'vxe-table';
import { I_Table_Filter_Props, I_Table_Filter_Item } from '../table-filter/type';

interface I_Filter_Config extends I_Table_Filter_Props {
	items: I_Table_Filter_Item[];
}
export type T_Msg = boolean | (() => boolean) | Promise<boolean>;

export type JlgGridInstance<T = any> = {
	xGrid: VxeGridInstance<T>;
	commitProxy: (code: string | VxeToolbarPropTypes.ButtonConfig, msg: T_Msg, ...args: any[]) => Promise<any>;
};

export declare interface I_Table_Grid_Props<D> extends Omit<VxeGridProps<D>, 'formConfig' | 'filterConfig'> {
	tableFilterConfig?: I_Filter_Config;
}
