import { FormProps, FormItemProps } from 'element-plus';
import { I_Grid_Cell_Props } from 'jlg-ui/dist/packages/grid-cell/type';
import { I_Grid_Layout_Props } from 'jlg-ui/dist/packages/grid-layout/type';

export enum E_JlgForm_FormType {
	输入框 = 'input',
	数字输入框 = 'number',
	单选框 = 'radio',
}

export declare interface I_JlgForm_FormJsonItem {
	type: E_JlgForm_FormType;
	key: string | number;
	gridCellProps: I_Grid_Cell_Props;
	formItemProps?: Partial<FormItemProps>;
}

export declare interface I_JlgForm_Props {
	formJson: I_JlgForm_FormJsonItem[];
	gridLayoutProps: I_Grid_Layout_Props;
	formProps?: Partial<FormProps>;
}
