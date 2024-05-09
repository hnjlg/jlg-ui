import { T_Jlg_Radio_Props } from '../radio/type';

export declare type T_Jlg_RadioGroup_Props = {
	size?: '' | 'default' | 'small' | 'large';
	modelValue?: string | number | boolean;
	disabled?: boolean;
	id?: string;
	fill?: string;
	label?: string;
	textColor?: string;
	name?: string;
	validateEvent?: boolean;
	radioOptions?: T_Jlg_Radio_Props[];
	gatherProps?: object;
};

export declare interface I_Jlg_RadioGroup_Emits {
	(e: 'update:modelValue', value: T_Jlg_RadioGroup_Props['modelValue']): void;
}
