<template>
	<el-input v-model="props.formData[props.field]" v-bind="props.elComponentsProps" />
</template>

<script setup lang="ts">
import { I_JlgForm_FormJsonItem_Base, I_JlgForm_FormJsonItem_Input } from '../../type';

defineOptions({
	name: 'JlgFormInput',
});

const props = withDefaults(
	defineProps<{
		field: I_JlgForm_FormJsonItem_Base['field'];
		formData: object;
		elComponentsProps: I_JlgForm_FormJsonItem_Input['elComponentsProps'];
	}>(),
	{}
);
</script>

<style scoped></style>
