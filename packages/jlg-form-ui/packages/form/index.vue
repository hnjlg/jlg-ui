<template>
	<el-form v-bind="props.formProps">
		<jlg-grid-layout v-bind="props.gridLayoutProps">
			<jlg-grid-cell v-for="formItem in props.formJson" :key="formItem.key" v-bind="formItem.gridCellProps">
				<el-form-item v-bind="formItem.formItemProps">
					<component :is="renderFormItemComponent(formItem)"></component>
				</el-form-item>
			</jlg-grid-cell>
		</jlg-grid-layout>
	</el-form>
</template>

<script setup lang="ts">
import { I_JlgForm_Props, E_JlgForm_FormType, I_JlgForm_FormJsonItem } from './type';
import { JlgGridLayout, JlgGridCell } from 'jlg-ui';
import Input from './components/input/index.vue';
import InputNumber from './components/number/index.vue';
import Radio from './components/radio/index.vue';

defineOptions({
	name: 'JlgForm',
});

const props = withDefaults(defineProps<I_JlgForm_Props>(), {});

const renderFormItemComponent = (formItem: I_JlgForm_FormJsonItem) => {
	switch (formItem.type) {
		case E_JlgForm_FormType.输入框:
			// return h(defineAsyncComponent(() => import('./components/input/index.vue')));
			return Input;
		case E_JlgForm_FormType.数字输入框:
			return InputNumber;
		case E_JlgForm_FormType.单选框:
			return Radio;
	}
};
</script>
