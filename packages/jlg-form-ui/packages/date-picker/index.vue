<template>
	<jlg-tooltip v-bind="mergeTooltipPropsComputed">
		<el-date-picker
			:model-value="props.modelValue"
			v-bind="mergeDatePickerPropsComputed"
			:placeholder="placeholderComputed"
			@update:model-value="(v) => emits('update:modelValue', v)"
		>
			<template v-for="(index, name) in slots">
				<slot :name="name" />
			</template>
		</el-date-picker>
	</jlg-tooltip>
</template>

<script setup lang="ts">
import JlgTooltip from '../tooltip/index.vue';
import { globalComponentConfig } from '../index';
import { T_Jlg_DatePicker_Props, I_Jlg_DatePicker_Emits } from './type';
import { FormItemContext, formItemContextKey } from 'element-plus';
import { T_Add_Gather_Fn } from '../form/type';

defineOptions({
	name: 'JlgDatePicker',
});

const props = withDefaults(defineProps<T_Jlg_DatePicker_Props>(), {});

const attrs = useAttrs();

const emits = defineEmits<I_Jlg_DatePicker_Emits>();

const slots = useSlots();

const context: FormItemContext | undefined = inject(formItemContextKey);

const toolTipShow = ref(false);

const valueText = computed(() => String(props.modelValue ?? ''));

const mergeTooltipPropsComputed = computed(() => {
	return {
		...{
			disabled: !mergeDatePickerPropsComputed.value.disabled,
			visible: toolTipShow.value,
			content: valueText.value,
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

const formAddGatherFn: T_Add_Gather_Fn | undefined = inject('formAddGatherFn');

onMounted(() => {
	formAddGatherFn &&
		formAddGatherFn({
			formItemLabel: context.label,
			fn() {
				return {
					label: context.label ?? '',
					key: context.prop ?? '',
					value: valueText.value,
					type: mergeDatePickerPropsComputed.value.type,
					...(mergeDatePickerPropsComputed.value.gatherProps ?? {}),
				};
			},
		});
});
</script>

<style scoped lang="scss"></style>
