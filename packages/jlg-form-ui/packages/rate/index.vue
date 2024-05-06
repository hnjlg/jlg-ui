<template>
	<jlg-tooltip v-bind="mergeTooltipPropsComputed">
		<el-rate
			:model-value="props.modelValue"
			v-bind="mergeRatePropsComputed"
			@update:model-value="(v) => emits('update:modelValue', v)"
			@mouseenter="mouseenter"
			@mouseleave="mouseleave"
		/>
	</jlg-tooltip>
</template>

<script setup lang="ts">
import { globalComponentConfig } from '../index';
import { I_Jlg_Rate_Emits, T_Jlg_Rate_Props } from './type';
import { useAttrs } from 'vue';

defineOptions({
	name: 'JlgRate',
});

const props = withDefaults(defineProps<T_Jlg_Rate_Props>(), {
	max: 5,
});

const attrs = useAttrs();

const emits = defineEmits<I_Jlg_Rate_Emits>();

const toolTipShow = ref(false);

const mergeTooltipPropsComputed = computed(() => {
	return {
		...{
			disabled: !mergeRatePropsComputed.value.disabled,
			visible: toolTipShow.value,
			content: `${String(props.modelValue)}/${mergeRatePropsComputed.value.max}`,
		},
		...globalComponentConfig.tooltip,
		...(props.toolTipProps ?? {}),
	};
});

const mergeRatePropsComputed = computed(() => {
	return {
		...globalComponentConfig.rate,
		...props,
		...attrs,
	};
});

const mouseenter = () => {
	if (!mergeRatePropsComputed.value.disabled) {
		return;
	}
	toolTipShow.value = true;
};

const mouseleave = () => {
	if (!mergeRatePropsComputed.value.disabled) {
		return;
	}
	toolTipShow.value = false;
};
</script>

<style scoped lang="scss"></style>
