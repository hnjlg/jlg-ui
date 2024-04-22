<template>
	<jlg-form v-model="formData" style="height: 800px" :grid-layout-props="gridLayoutProps" :form-props="formProps" :form-json="formJson">
		<template #el-slot>
			<div>插槽内容</div>
		</template>
	</jlg-form>
</template>

<script setup lang="ts">
import JlgForm from '@pac/form/index.vue';
import { I_JlgForm_Props, E_JlgForm_FormType } from '../../../../packages/form/type';
import { ref } from 'vue';

defineOptions({
	name: 'FormBaseUse',
});

const formData = ref({
	name: '张三',
	age: 8,
	sex: 1,
	level: 1,
	select: 1,
});

const formJson = ref<I_JlgForm_Props['formJson']>([
	{
		formItemProps: {
			label: '姓名',
			size: 'large',
		},
		gridCellProps: {
			width: 2,
			height: 2,
		},
		type: E_JlgForm_FormType.输入框,
		field: 'name',
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
		field: 'age',
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
		field: 'sex',
	},
	{
		formItemProps: {
			label: '等级',
			size: 'small',
		},
		gridCellProps: {
			width: 1,
			height: 1,
		},
		type: E_JlgForm_FormType.评分,
		field: 'level',
	},
	{
		formItemProps: {
			label: '下拉选择',
			size: 'small',
		},
		gridCellProps: {
			width: 1,
			height: 1,
		},
		type: E_JlgForm_FormType.选择框,
		field: 'select',
	},
	{
		formItemProps: {
			label: '插槽',
			size: 'small',
		},
		gridCellProps: {
			width: 1,
			height: 1,
		},
		type: E_JlgForm_FormType.选择框,
		field: 'slot',
	},
]);

const formProps = ref<I_JlgForm_Props['formProps']>({
	labelPosition: 'top',
});

const gridLayoutProps = ref<I_JlgForm_Props['gridLayoutProps']>({
	padding: '0px',
	flow: 'row',
	rows: 10,
	columns: 5,
	gap: '10px',
	inline: true,
	border: true,
});
</script>
