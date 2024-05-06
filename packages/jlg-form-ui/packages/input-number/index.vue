<template>
	<jlg-tooltip v-bind="mergeTooltipPropsComputed">
		<el-input-number
			:model-value="props.modelValue"
			v-bind="mergeNumberPropsComputed"
			@update:model-value="(v) => emits('update:modelValue', v)"
			@mouseenter="mouseenter"
			@mouseleave="mouseleave"
		>
			<template v-for="(index, name) in slots">
				<slot :name="name" />
			</template>
		</el-input-number>
	</jlg-tooltip>
</template>

<script setup lang="ts">
import { FormItemContext, formItemContextKey } from 'element-plus';
import { E_JlgForm_FormType, T_Add_Gather_Fn } from '../form/type';
import { globalComponentConfig } from '../index';
import { I_Jlg_InputNumber_Emits, T_Jlg_InputNumber_Props } from './type';

defineOptions({
	name: 'JlgInputNumber',
});

const props = withDefaults(defineProps<T_Jlg_InputNumber_Props>(), {
	controls: true,
});

const attrs = useAttrs();

const emits = defineEmits<I_Jlg_InputNumber_Emits>();

const slots = useSlots();

const toolTipShow = ref(false);

const valueText = computed(() => String(props.modelValue ?? ''));

const mergeTooltipPropsComputed = computed(() => {
	return {
		...{
			disabled: !mergeNumberPropsComputed.value.disabled,
			visible: toolTipShow.value,
			content: valueText.value,
		},
		...globalComponentConfig.tooltip,
		...(props.toolTipProps ?? {}),
	};
});

const mergeNumberPropsComputed = computed(() => {
	return {
		...globalComponentConfig.inputNumber,
		...props,
		...attrs,
	};
});

const context: FormItemContext | undefined = inject(formItemContextKey);

const formAddGatherFn: T_Add_Gather_Fn = inject('formAddGatherFn');

onMounted(() => {
	formAddGatherFn({
		formItemLabel: context.label,
		fn() {
			return {
				label: context.label ?? '',
				key: context.prop ?? '',
				value: valueText.value,
				type: E_JlgForm_FormType.数字输入框,
				...(mergeNumberPropsComputed.value.gatherProps ?? {}),
			};
		},
	});
});

const mouseenter = () => {
	if (!mergeNumberPropsComputed.value.disabled) {
		return;
	}
	toolTipShow.value = true;
};

const mouseleave = () => {
	if (!mergeNumberPropsComputed.value.disabled) {
		return;
	}
	toolTipShow.value = false;
};
</script>

<style scoped lang="scss"></style>
