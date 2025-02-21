import { PopoverProps } from 'element-plus';

export declare interface I_JlgMenu_MenuDataItem {
	title: string | number;
	iconClass: string;
	key: number | string;
	children?: I_JlgMenu_MenuDataItem[];
	[k: string]: any;
}

export declare type T_MenuDataRecord = {
	[k in keyof I_JlgMenu_MenuDataItem]: string;
};

export declare interface I_Jlg_Menu_Props {
	menuData: I_JlgMenu_MenuDataItem[];
	collectMenuKeys: I_JlgMenu_MenuDataItem['key'][];
	menuDataRecord?: T_MenuDataRecord;
	defaultActive?: I_JlgMenu_MenuDataItem['key'][];
	elPopoverProps?: PopoverProps;
}

export declare interface I_Jlg_Menu_Emits {
	(
		e: 'collectClick',
		jlgMenuDataItem: I_JlgMenu_MenuDataItem,
		meneArr: [I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem]
	): void;
	(
		e: 'threeLevelMenuClick',
		jlgMenuDataItem: I_JlgMenu_MenuDataItem,
		meneArr: [I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem, I_JlgMenu_MenuDataItem]
	): void;
}
