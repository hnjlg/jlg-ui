<template>
	<el-input-number v-model="props.formData[props.field]" v-bind="props.elComponentsProps" />
</template>

<script setup lang="ts">
import { I_JlgForm_FormJsonItem_Base, I_JlgForm_FormJsonItem_InputNumber } from '../../type';

defineOptions({
	name: 'JlgFormNumber',
});

const props = withDefaults(
	defineProps<{
		field: I_JlgForm_FormJsonItem_Base['field'];
		formData: object;
		elComponentsProps: I_JlgForm_FormJsonItem_InputNumber['elComponentsProps'];
	}>(),
	{}
);
</script>

<style scoped></style>
