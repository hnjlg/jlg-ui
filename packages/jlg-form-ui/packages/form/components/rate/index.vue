<template>
	<el-rate v-model="props.formData[props.field]" v-bind="props.elComponentsProps" />
</template>

<script setup lang="ts">
import { I_JlgForm_FormJsonItem_Rate, I_JlgForm_FormJsonItem_Base } from '../../type';

defineOptions({
	name: 'JlgFormRate',
});

const props = withDefaults(
	defineProps<{
		field: I_JlgForm_FormJsonItem_Base['field'];
		formData: object;
		elComponentsProps: I_JlgForm_FormJsonItem_Rate['elComponentsProps'];
	}>(),
	{}
);
</script>

<style scoped lang="scss"></style>
