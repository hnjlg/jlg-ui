<template>
	<jlg-tooltip v-bind="mergeTooltipPropsComputed">
		<el-time-select
			:model-value="props.modelValue"
			v-bind="mergeTimeSelectPropsComputed"
			@update:model-value="(v) => emits('update:modelValue', v)"
		/>
	</jlg-tooltip>
</template>

<script setup lang="ts">
import JlgTooltip from '../tooltip/index.vue';
import { globalComponentConfig } from '../index';
import { T_Jlg_TimeSelect_Props } from './type';

defineOptions({
	name: 'JlgTimeSelect',
});

const props = withDefaults(defineProps<T_Jlg_TimeSelect_Props>(), {});

const emits = defineEmits<{
	(e: 'update:modelValue', v: T_Jlg_TimeSelect_Props['modelValue']): void;
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

const mergeTimeSelectPropsComputed = computed(() => {
	return {
		...globalComponentConfig.timeSelect,
		...props,
	};
});
</script>

<style scoped lang="scss"></style>
