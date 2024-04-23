import { I_Table_Filter_Props } from '../packages/table-filter/type';

export type T_Global_Config_Props = {
	// 表格筛选器默认配置
	tableFilter: I_Table_Filter_Props;
};

const GlobalConfig: T_Global_Config_Props = {
	tableFilter: {
		titleAlign: 'left',
		titleWidth: 95,
		folding: false,
	},
};

export default GlobalConfig;
