<template>
	<jlg-tooltip v-bind="mergeTooltipPropsComputed">
		<el-input-number :model-value="props.modelValue" v-bind="mergeNumberPropsComputed" @update:model-value="(v) => emits('update:modelValue', v)" />
	</jlg-tooltip>
</template>

<script setup lang="ts">
import { globalComponentConfig } from '../index';
import { T_Jlg_Input_Number_Props } from './type';

defineOptions({
	name: 'JlgInputNumber',
});

const props = withDefaults(defineProps<T_Jlg_Input_Number_Props>(), {
	controls: true,
});

const emits = defineEmits<{
	(e: 'update:modelValue', v: T_Jlg_Input_Number_Props['modelValue']): void;
}>();

const toolTipShow = ref(false);

const mergeTooltipPropsComputed = computed(() => {
	return {
		...{
			disabled: !toolTipShow.value,
			content: String(props.modelValue),
		},
		...globalComponentConfig.tooltip,
		...(props.toolTipProps ?? {}),
	};
});

const mergeNumberPropsComputed = computed(() => {
	return {
		...globalComponentConfig.inputNumber,
		...props,
	};
});
</script>

<style scoped lang="scss"></style>
