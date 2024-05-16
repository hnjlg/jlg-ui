import { T_Jlg_Flex_Cell_Props } from '../flex-cell/type';

export declare type T_Jlg_Flex_Layout_Props = {
	col: number;
	gap?: string;
};

export declare type T_Flex_Layout_Collect_Flex_Cell_Props_Fn = (option: { uid: string; props: T_Jlg_Flex_Cell_Props & { uid: string } }) => void;

export declare type T_Flex_Cell_Props = { [k in string]: T_Jlg_Flex_Cell_Props };
