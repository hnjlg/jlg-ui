import { T_Add_Gather_Fn, T_JlgForm_Props } from '../type';

export default (mergeFormPropsComputed: ComputedRef<T_JlgForm_Props>) => {
	const gatherMap = new Map();

	const formAddGatherFn: T_Add_Gather_Fn = (config) => {
		let map = gatherMap.get(config.formItemLabel);
		if (!map) {
			gatherMap.set(config.formItemLabel, (map = new Set()));
		}
		map.add(config.fn);
	};

	const getGatherData = () => {
		const data = [];
		gatherMap.forEach((set) => {
			const arr = [];
			set.forEach((fn) => {
				arr.push({ ...mergeFormPropsComputed.value.gatherProps, ...fn() });
			});
			data.push(arr.length === 1 ? arr[0] : arr);
		});
		return {
			type: 'form',
			data: data,
		};
	};

	provide('formAddGatherFn', formAddGatherFn);

	return {
		getGatherData,
	};
};
