import { PopoverProps } from 'element-plus';

export declare interface I_JlgMenu_MenuDataItem {
    title: string | number;
    iconClass: string;
    index: number | string;
    isCollect: boolean;
    children?: I_JlgMenu_MenuDataItem[];
}
export declare interface I_JlgMenu_Props {
    menuData: I_JlgMenu_MenuDataItem[];
    defaultActive?: I_JlgMenu_MenuDataItem['index'];
    elPopoverProps?: Partial<PopoverProps>;
}
