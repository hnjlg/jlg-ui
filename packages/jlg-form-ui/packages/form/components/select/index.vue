<template>
	<el-select v-model="props.formData[props.field]" v-bind="props.elComponentsProps">
		<el-option v-for="option in props.elComponentsProps.optionOptions" :key="option.value" v-bind="option" />
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
</script>

<style scoped lang="scss"></style>
