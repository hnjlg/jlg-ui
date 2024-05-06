import { VxeGridInstance, VxeGridProps, VxeToolbarPropTypes } from 'vxe-table';
import { I_Table_Filter_Props } from '../table-filter/type';
import { VxeTableDataRow } from 'vxe-table/types/table';
import { VNodeTypes } from 'vue';
// import { ComponentPublicInstance } from 'vue';

export type T_Msg = boolean | (() => boolean) | Promise<boolean>;
type T_Destroy = {
	onDestroy: () => void;
};
export type T_RenderCustomTemplate = <P = Record<string, any>>(customComponent: VNodeTypes, props: P) => T_Destroy;

export type JlgGridInstance<T = any> = {
	xGrid: VxeGridInstance<T>;
	reactData: Record<string, any>;
	commitProxy: (code: string | VxeToolbarPropTypes.ButtonConfig, msg: T_Msg, ...args: any[]) => Promise<any>;
	refresh: (refreshToFirstPage: boolean) => void;
	resetCustomEvent: () => Promise<void>;
	renderCustomTemplate: T_RenderCustomTemplate;
};

export declare interface I_Table_Grid_Props<D = VxeTableDataRow> extends Omit<VxeGridProps<D>, 'formConfig' | 'filterConfig'> {
	tableFilterConfig?: I_Table_Filter_Props;
	operationConfig?: {
		/**
		 * 操作列宽度
		 */
		width?: number;
		/**
		 * 操作列固定
		 */
		fixed?: 'left' | 'right';
		/**
		 * 操作列标题
		 */
		title?: string;
		/**
		 * 操作列标题对齐方式
		 */
		align?: 'left' | 'center' | 'right';
	};
	storageConfig?: {
		/**
		 * 是否启用服务端存储
		 */
		enabled?: boolean;
		/**
		 * 是否启用自动存储，开启后，拖拽列宽、拖拽列顺序、列隐藏等操作将通过触发 saveSysConfig 函数自动保存到服务端
		 */
		autoStorage?: boolean;
	};
}
