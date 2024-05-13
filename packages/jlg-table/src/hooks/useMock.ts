import { VxeTableDefines } from 'vxe-table/types/table';

// 模拟获取table 配置
export function useGetSysConfig() {
	return new Promise((resolve) => {
		// 优先从localStorage获取
		const storedConfig = localStorage.getItem('sysConfig');
		if (storedConfig) {
			setTimeout(() => {
				resolve(JSON.parse(storedConfig));
			}, 200);
		} else {
			// 如果localStorage中没有，则模拟获取系统配置
			setTimeout(() => {
				resolve({
					searchData: [],
					columns: [],
				});
			}, 200);
		}
	});
}

//
export function useSaveSysConfig(columns: VxeTableDefines.ColumnInfo, searchData: Record<string, any>, globalConfig = {}, type: string) {
	// 将配置保存到localStorage
	const config = {
		columns,
		searchData,
		globalConfig,
	};
	localStorage.setItem('sysConfig', JSON.stringify(config));

	setTimeout(() => {
		console.log('columns', columns);
		console.log('searchData', searchData);
		console.log('type', type);
	}, 200);
}
