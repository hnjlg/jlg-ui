<template>
	<el-button @click="gather">收集数据</el-button>
	{{ formData }}
	<jlg-form
		ref="JlgFormRef"
		v-model="formData"
		:grid-layout-props="gridLayoutProps"
		:form-json="formJson"
		label-position="top"
		:gather-props="{ col: 1, allCol: 3 }"
	>
		<template #el-slot="{ field, elComponentsProps }">
			<div>插槽内容{{ field }}{{ elComponentsProps }}</div>
		</template>
	</jlg-form>
</template>

<script setup lang="ts">
import { T_JlgForm_Props, E_JlgForm_FormType } from '@pac/form/type';
import { ref } from 'vue';

defineOptions({
	name: 'FormBaseUse',
});

const JlgFormRef = ref();

const formData = ref({
	name: '张三',
	age: 8,
	sex: 1,
	level: 1,
	select: 1,
});

const formJson = ref<T_JlgForm_Props['formJson']>([
	{
		formItemProps: {
			label: '姓名',
			size: 'small',
			prop: 'name',
		},
		gridCellProps: {
			width: 2,
			height: 2,
		},
		type: E_JlgForm_FormType.输入框,
		field: 'name',
		elComponentsProps: {
			gatherProps: {
				col: 2,
				allCol: 5,
				ignore: true,
			},
		},
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
		controls: true,
		elComponentsProps: {
			controls: true,
		},
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
		elComponentsProps: {
			radioOptions: [
				{ value: 1, label: '男', title: '男' },
				{ value: 2, label: '女', title: '女' },
			],
		},
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
		elComponentsProps: {
			optionOptions: [
				{
					label: 'option1',
					value: 1,
				},
				{
					label: 'option2',
					value: 2,
					disabled: true,
				},
				{
					label: 'option3',
					value: 3,
				},
			],
			multiple: true,
		},
	},
	{
		formItemProps: {
			label: '日期',
			size: 'small',
		},
		gridCellProps: {
			width: 1,
			height: 1,
		},
		type: E_JlgForm_FormType.日期,
		field: 'datePicker',
		elComponentsProps: {
			type: 'date',
		},
	},
	{
		formItemProps: {
			label: '时间',
			size: 'small',
		},
		gridCellProps: {
			width: 1,
			height: 1,
		},
		type: E_JlgForm_FormType.时间,
		field: 'timeSelect',
		elComponentsProps: {
			start: '08:30',
			step: '00:15',
			end: '18:30',
		},
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
		elComponentsProps: {
			optionOptions: [],
		},
	},
]);

const gridLayoutProps = ref<T_JlgForm_Props['gridLayoutProps']>({
	padding: '0px',
	flow: 'row',
	columns: 5,
	gap: '10px',
	inline: true,
	border: false,
});

const gather = () => {
	console.log(JlgFormRef.value.getGatherData());
};
</script>
