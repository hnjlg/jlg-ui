<template>
	<el-radio-group v-model="props.formData[props.field]" v-bind="props.elComponentsProps">
		<el-radio v-for="radio in props.elComponentsProps.radioOptions" :key="radio.value" v-bind="radio">{{ radio.title }}</el-radio>
	</el-radio-group>
</template>

<script setup lang="ts">
import { I_JlgForm_FormJsonItem_Base, I_JlgForm_FormJsonItem_Radio } from '../../type';

defineOptions({
	name: 'JlgFormRadio',
});

const props = withDefaults(
	defineProps<{
		field: I_JlgForm_FormJsonItem_Base['field'];
		formData: object;
		elComponentsProps: I_JlgForm_FormJsonItem_Radio['elComponentsProps'];
	}>(),
	{}
);
</script>

<style scoped lang="scss"></style>
