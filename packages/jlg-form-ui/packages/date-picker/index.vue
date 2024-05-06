<template>
	<jlg-tooltip v-bind="mergeTooltipPropsComputed">
		<el-date-picker
			:model-value="props.modelValue"
			v-bind="mergeDatePickerPropsComputed"
			:placeholder="placeholderComputed"
			@update:model-value="(v) => emits('update:modelValue', v)"
		>
		</el-date-picker>
	</jlg-tooltip>
</template>

<script setup lang="ts">
import JlgTooltip from '../tooltip/index.vue';
import { globalComponentConfig } from '../index';
import { T_Jlg_DatePicker_Props } from './type';
import { useAttrs } from 'vue';
import { FormItemContext, formItemContextKey } from 'element-plus';

defineOptions({
	name: 'JlgDatePicker',
});

const props = withDefaults(defineProps<T_Jlg_DatePicker_Props>(), {});

const attrs = useAttrs();

const emits = defineEmits<{
	(e: 'update:modelValue', v: T_Jlg_DatePicker_Props['modelValue']): void;
}>();

const context: FormItemContext | undefined = inject(formItemContextKey);

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

const mergeDatePickerPropsComputed = computed(() => {
	return {
		...globalComponentConfig.datePicker,
		...props,
		...attrs,
	};
});

const placeholderComputed = computed(() => {
	if (mergeDatePickerPropsComputed.value.placeholder) {
		return mergeDatePickerPropsComputed.value.placeholder;
	} else if (context) {
		return `请选择${context.label}`;
	} else {
		return '请选择日期';
	}
});
</script>

<style scoped lang="scss"></style>
