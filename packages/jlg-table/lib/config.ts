import merge from 'xe-utils/merge';
import GlobalConfig, { T_Global_Config_Props } from './useGlobalConfig';
import { VXETableConfigOptions } from 'vxe-table/types/v-x-e-table/config';
import VXETable from 'vxe-table';

/**
 * 全局参数设置
 * @param options 全局参数
 * @param vxeOptions vxe-table 全局参数
 */
export const globalSetup = (options?: T_Global_Config_Props, vxeOptions: VXETableConfigOptions = {}) => {
	VXETable.config(
		merge(
			{
				// icon 使用我们自己的 icon
				icon: options?.icon || GlobalConfig.icon,
			},
			vxeOptions
		)
	);
	return merge(GlobalConfig, options || {});
};
