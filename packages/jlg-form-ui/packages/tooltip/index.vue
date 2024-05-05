<template>
	<el-tooltip v-bind="mergeTooltipPropsComputed" :trigger-keys="[]">
		<slot></slot>
	</el-tooltip>
</template>

<script setup lang="ts">
import { globalComponentConfig } from '../index';
import { T_Jlg_Tooltip_Props } from './type';

defineOptions({
	name: 'JlgTooltip',
});

const props = withDefaults(defineProps<T_Jlg_Tooltip_Props>(), {});

const mergeTooltipPropsComputed = computed(() => {
	return {
		...globalComponentConfig.tooltip,
		...props,
	};
});
</script>

<style scoped></style>
