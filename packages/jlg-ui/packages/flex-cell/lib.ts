import { T_Flex_Cell_Props } from '../flex-layout/type';
import { E_Cell_Position } from './type';

// 得到布局二维数组
export const groupCols = (object: T_Flex_Cell_Props, n) => {
	const result = [];
	let currentGroup = {};
	let currentSum = 0;

	Object.entries(object).forEach(([key, value]) => {
		if (currentSum + value.col <= n) {
			currentGroup[key] = value;
			currentSum += value.col;
		} else {
			result.push(Object.assign({}, currentGroup));
			currentGroup = { [key]: value };
			currentSum = value.col;
		}
	});

	if (Object.keys(currentGroup).length > 0) {
		result.push(currentGroup);
	}

	return result.map((group) => Object.values(group));
};

// 找到当前uid所在行位置
export const findPosition = (array, uid) => {
	for (let i = 0; i < array.length; i++) {
		const subArray = array[i];
		if (subArray.length > 0) {
			if (subArray[0].uid === uid) {
				return { type: E_Cell_Position.头部, length: subArray.length };
			} else if (subArray[subArray.length - 1].uid === uid) {
				return { type: E_Cell_Position.尾部, length: subArray.length };
			}
		}
	}
	return { type: E_Cell_Position.中间, length: 0 };
};

// 获取对应uid所在数组的长度，得到当前行一共几个cell
export const findLength = (array, uid) => {
	for (let i = 0; i < array.length; i++) {
		const subArray = array[i];
		for (let j = 0; j < subArray.length; j++) {
			if (subArray[j].uid === uid) {
				return subArray.length;
			}
		}
	}
	return 0;
};
