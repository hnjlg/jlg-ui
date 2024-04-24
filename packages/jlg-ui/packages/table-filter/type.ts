import { VxeFormItemProps, VxeFormPropTypes } from 'vxe-table';
import {} from 'vxe-table/types/form';
import { VxeFormItemPropTypes } from 'vxe-table/types/form-item';

type T_Vxe_Form_Item_Props_Pick = 'title' | 'field' | 'titleWidth' | 'className' | 'titleClassName' | 'titleOverflow' | 'visible';
type Align = 'left' | 'top' | 'right' | '' | null;

export declare interface I_Table_Filter_Item extends Pick<VxeFormItemProps, T_Vxe_Form_Item_Props_Pick> {
	type: 'text' | 'number' | 'select' | 'time' | 'datetimeRange' | 'dayTime' | 'treeSelect';
	/**
	 * 默认值
	 */
	defaultValue?: VxeFormItemPropTypes.ResetValue;
	/**
	 * 筛选类型
	 */
	searchType?: 0 | 1;
	/**
	 * 是否快捷搜索
	 */
	quickSearch?: boolean;
	/**
	 * 标题对齐方式
	 */
	titleAlign?: Align;
	/**
	 * 是否为纯净模式（不显示筛选类型）
	 */
	isPure?: boolean;
	/**
	 * element-plus 表单组件的其余参数与事件
	 */
	props?: Record<string, any>;
}

export declare interface I_Table_Filter_Props {
	// 所有项的标题对齐方式
	titleAlign?: Align;
	// 所有项的标题宽度
	titleWidth: VxeFormPropTypes.TitleWidth;
	// 是否折叠
	folding: boolean;
}
