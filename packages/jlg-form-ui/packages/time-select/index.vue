<template>
	<jlg-tooltip v-bind="mergeTooltipPropsComputed">
		<el-time-select
			:model-value="props.modelValue"
			v-bind="mergeTimeSelectPropsComputed"
			:placeholder="placeholderComputed"
			@update:model-value="(v) => emits('update:modelValue', v)"
		/>
	</jlg-tooltip>
</template>

<script setup lang="ts">
import JlgTooltip from '../tooltip/index.vue';
import { globalComponentConfig } from '../index';
import { T_Jlg_TimeSelect_Props, I_Jlg_TimeSelect_Emits } from './type';
import { useAttrs } from 'vue';
import { FormItemContext, formItemContextKey } from 'element-plus';

defineOptions({
	name: 'JlgTimeSelect',
});

const props = withDefaults(defineProps<T_Jlg_TimeSelect_Props>(), {});

const attrs = useAttrs();

const emits = defineEmits<I_Jlg_TimeSelect_Emits>();

const context: FormItemContext | undefined = inject(formItemContextKey);

const toolTipShow = ref(false);

const mergeTooltipPropsComputed = computed(() => {
	return {
		...{
			disabled: !mergeTimeSelectPropsComputed.value.disabled,
			visible: toolTipShow.value,
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
		...attrs,
	};
});

const placeholderComputed = computed(() => {
	if (mergeTimeSelectPropsComputed.value.placeholder) {
		return mergeTimeSelectPropsComputed.value.placeholder;
	} else if (context) {
		return `请选择${context.label}`;
	} else {
		return '请选择';
	}
});
</script>

<style scoped lang="scss"></style>
