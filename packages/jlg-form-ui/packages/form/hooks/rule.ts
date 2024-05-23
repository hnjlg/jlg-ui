import { FormItemRule } from 'element-plus';
import { T_Assign_Rules_Fn, T_JlgForm_Props } from '../type';
import { E_FormValidatorRulesValidateFunEnum } from '../../rule';
import { cloneDeep, merge } from 'lodash-unified';

function setValue(obj, path, value) {
	const keys = path.split('.');
	let current = obj;

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		if (i === keys.length - 1) {
			current[key] = value;
		} else {
			current[key] = current[key] || {};
			current = current[key];
		}
	}

	return obj;
}

export default (mergeFormPropsComputed: ComputedRef<T_JlgForm_Props>) => {
	const assignRules = ref(mergeFormPropsComputed.value.rules ? cloneDeep(mergeFormPropsComputed.value.rules) : {});

	const assignRulesFn: T_Assign_Rules_Fn = (source) => {
		if (source) {
			const recordSplit = source.record.split('.');
			if (recordSplit.length > 1) {
				assignRules.value = merge(assignRules.value, setValue({}, source.record, source.recordValidate[source.record]));
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
