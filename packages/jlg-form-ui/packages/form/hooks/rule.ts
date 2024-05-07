import { FormItemRule } from 'element-plus';
import { T_Assign_Rules_Fn, T_JlgForm_Props } from '../type';
import { E_FormValidatorRulesValidateFunEnum } from '../../rule';
import { cloneDeep } from 'lodash-unified';

export default (mergeFormPropsComputed: ComputedRef<T_JlgForm_Props>) => {
	const assignRules = ref(mergeFormPropsComputed.value.rules ? cloneDeep(mergeFormPropsComputed.value.rules) : {});

	const assignRulesFn: T_Assign_Rules_Fn = (source) => {
		if (source) {
			const recordSplit = source.record.split('.');
			if (source.record.split('.').length > 1) {
				const rule = recordSplit.reduce((acc: any, cur) => {
					return acc[cur];
				}, assignRules.value);

				rule[recordSplit[0]] = [
					...((rule[recordSplit[0]] as FormItemRule[]) ?? []),
					...(source.recordValidate as unknown as Array<[E_FormValidatorRulesValidateFunEnum, ...any[]]>)[recordSplit[0]],
				];
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
