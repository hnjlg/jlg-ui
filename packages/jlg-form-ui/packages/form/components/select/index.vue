<template>
	<el-select v-model="props.formData[props.field]" v-bind="props.elComponentsProps">
		<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
	</el-select>
</template>

<script setup lang="ts">
import { I_JlgForm_FormJsonItem_Base, I_JlgForm_FormJsonItem_Select } from '../../type';

defineOptions({
	name: 'JlgFormSelect',
});

const props = withDefaults(
	defineProps<{
		field: I_JlgForm_FormJsonItem_Base['field'];
		formData: object;
		elComponentsProps: I_JlgForm_FormJsonItem_Select['elComponentsProps'];
	}>(),
	{}
);

const options = [
	{
		value: 'Option1',
		label: 'Option1',
	},
	{
		value: 'Option2',
		label: 'Option2',
	},
	{
		value: 'Option3',
		label: 'Option3',
	},
	{
		value: 'Option4',
		label: 'Option4',
	},
	{
		value: 'Option5',
		label: 'Option5',
	},
];
</script>

<style scoped lang="scss"></style>
