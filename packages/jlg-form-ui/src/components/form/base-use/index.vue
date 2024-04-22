<template>
	<jlg-form style="height: 800px" :grid-layout-props="gridLayoutProps" :form-props="formProps" :form-json="formJson"></jlg-form>
</template>

<script setup lang="ts">
import JlgForm from '@pac/form/index.vue';
import { I_JlgForm_Props, E_JlgForm_FormType } from '../../../../packages/form/type';
import { ref } from 'vue';

defineOptions({
	name: 'FormBaseUse',
});

const formJson = ref<I_JlgForm_Props['formJson']>([
	{
		formItemProps: {
			label: '姓名',
			size: 'large',
		},
		gridCellProps: {
			width: 2,
			height: 1,
		},
		type: E_JlgForm_FormType.输入框,
		key: 'name',
	},
	{
		formItemProps: {
			label: '年龄',
			size: 'small',
		},
		gridCellProps: {
			width: 1,
			height: 1,
		},
		type: E_JlgForm_FormType.数字输入框,
		key: 'age',
	},
	{
		formItemProps: {
			label: '性别',
			size: 'small',
		},
		gridCellProps: {
			width: 1,
			height: 1,
		},
		type: E_JlgForm_FormType.单选框,
		key: 'sex',
	},
]);

const formProps = ref<I_JlgForm_Props['formProps']>({
	labelPosition: 'top',
});

const gridLayoutProps = ref<I_JlgForm_Props['gridLayoutProps']>({
	padding: '20px',
	flow: 'row',
	rows: 5,
	columns: 5,
	gap: '10px',
	inline: true,
	border: false,
});
</script>
