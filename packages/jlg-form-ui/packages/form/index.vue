<template>
	<el-form v-bind="mergeFormPropsComputed">
		<slot>
			<jlg-grid-layout v-bind="props.gridLayoutProps">
				<jlg-grid-cell v-for="formItem in props.formJson" :key="formItem.field" v-bind="formItem.gridCellProps">
					<el-form-item v-bind="formItem.formItemProps">
						<slot :name="'el-' + formItem.field" :field="formItem.field" :el-components-props="formItem.elComponentsProps">
							<component :is="renderFormItemComponent(formItem)" v-model="props.modelValue[formItem.field]" v-bind="formItem.elComponentsProps">
							</component>
						</slot>
					</el-form-item>
				</jlg-grid-cell>
			</jlg-grid-layout>
		</slot>
	</el-form>
</template>

<script setup lang="ts">
import { T_JlgForm_Props, E_JlgForm_FormType, T_JlgForm_FormJsonItem } from './type';
import { JlgGridLayout, JlgGridCell } from 'jlg-ui';
import { globalComponentConfig } from '../index';
import Input from '../input/index.vue';
import InputNumber from '../input-number/index.vue';
import RadioGroup from '../radio-group/index.vue';
import Rate from '../rate/index.vue';
import Select from '../select/index.vue';
import DatePicker from '../date-picker/index.vue';
import TimeSelect from '../time-select/index.vue';
import { type Component, useAttrs } from 'vue';

defineOptions({
	name: 'JlgForm',
});

const props = withDefaults(defineProps<T_JlgForm_Props>(), {});

const attrs = useAttrs();

const mergeFormPropsComputed = computed(() => {
	return {
		...globalComponentConfig.form,
		...props,
		...attrs,
	};
});

const renderFormItemComponent = (formItem: T_JlgForm_FormJsonItem): Component => {
	switch (formItem.type) {
		case E_JlgForm_FormType.输入框:
			// return h(defineAsyncComponent(() => import('./components/input/index.vue')));
			return Input;
		case E_JlgForm_FormType.数字输入框:
			return InputNumber;
		case E_JlgForm_FormType.单选框:
			return RadioGroup;
		case E_JlgForm_FormType.评分:
			return Rate;
		case E_JlgForm_FormType.日期:
			return DatePicker;
		case E_JlgForm_FormType.时间:
			return TimeSelect;
		case E_JlgForm_FormType.选择框:
			return Select;
	}
};
</script>
