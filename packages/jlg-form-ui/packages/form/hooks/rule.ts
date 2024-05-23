import { FormItemRule } from 'element-plus';
import { T_Assign_Rules_Fn, T_JlgForm_Props } from '../type';
import { E_FormValidatorRulesValidateFunEnum } from '../../rule';
import { cloneDeep, merge } from 'lodash-unified';

function transformData(data) {
	const transformedData: any = {};
	for (const key in data) {
		if (key === 'record' || key === 'recordValidate') {
			const recordValidate = data.recordValidate;
			transformedData.input = {};
			for (const subKey in recordValidate) {
				if (subKey.startsWith('input')) {
					const newKey = subKey.split('.')[1];
					if (Array.isArray(recordValidate[subKey])) {
						transformedData.input[newKey] = recordValidate[subKey];
					} else {
						transformedData.input[newKey] = recordValidate[subKey];
					}
				}
			}
		}
	}
	return transformedData;
}

export default (mergeFormPropsComputed: ComputedRef<T_JlgForm_Props>) => {
	const assignRules = ref(mergeFormPropsComputed.value.rules ? cloneDeep(mergeFormPropsComputed.value.rules) : {});

	const assignRulesFn: T_Assign_Rules_Fn = (source) => {
		if (source) {
			const recordSplit = source.record.split('.');
			if (recordSplit.length > 1) {
				console.log(transformData(source));
				assignRules.value = merge(assignRules.value, transformData(source));
			} else {
				assignRules.value[recordSplit[0]] = [
					...((assignRules.value[recordSplit[0]] as FormItemRule[]) ?? []),
					...(source.recordValidate as unknown as Array<[E_FormValidatorRulesValidateFunEnum, ...any[]]>)[recordSplit[0]],
				];
			}
		}
	};

	provide('assignRulesFn', assignRulesFn);

	return {
		assignRules,
	};
};
