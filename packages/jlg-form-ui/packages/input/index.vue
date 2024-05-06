<template>
	<jlg-tooltip v-bind="mergeTooltipPropsComputed">
		<el-input
			:model-value="props.modelValue"
			v-bind="mergeInputPropsComputed"
			:placeholder="placeholderComputed"
			@update:model-value="updateModelValue"
			@blur="blurInput"
			@mouseenter="mouseenter"
			@mouseleave="mouseleave"
		>
			<template v-for="(index, name) in slots">
				<slot :name="name" />
			</template>
		</el-input>
	</jlg-tooltip>
</template>

<script setup lang="ts">
import { useSlots, useAttrs } from 'vue';
import { I_Jlg_Input_Emits, T_Jlg_Input_Props } from './type';
import { globalComponentConfig } from '../index';
import JlgTooltip from '../tooltip/index.vue';
import { FormItemContext, formItemContextKey } from 'element-plus';

defineOptions({
	name: 'JlgInput',
});

const slots = useSlots();

const props = withDefaults(defineProps<T_Jlg_Input_Props>(), {});

const attrs = useAttrs();

const emits = defineEmits<I_Jlg_Input_Emits>();

// formItem传递的context
const context: FormItemContext | undefined = inject(formItemContextKey);

const toolTipShow = ref(false);

const mergeTooltipPropsComputed = computed(() => {
	return {
		...{
			disabled: !mergeInputPropsComputed.value.disabled,
			visible: toolTipShow.value,
			content: String(props.modelValue),
		},
		...globalComponentConfig.tooltip,
		...(props.toolTipProps ?? {}),
	};
});

const mergeInputPropsComputed = computed(() => {
	return {
		...globalComponentConfig.input,
		...props,
		...attrs,
	};
});

// 自定义处理placeholder
const placeholderComputed = computed(() => {
	if (mergeInputPropsComputed.value.placeholder) {
		return mergeInputPropsComputed.value.placeholder;
	} else if (context && context.label) {
		const maxLengthText = mergeInputPropsComputed.value.maxlength ? `，最大可输入${mergeInputPropsComputed.value.maxlength}个字` : '';
		return `请输入${context.label}${maxLengthText}`;
	} else {
		return '请输入';
	}
});

const updateModelValue = (v) => {
	emits('update:modelValue', v);
};

const blurInput = (event) => {
	// 去除两端空格
	emits('update:modelValue', String(props.modelValue ?? '').trim());
	emits('blur', event);
};

const mouseenter = () => {
	if (!mergeInputPropsComputed.value.disabled) {
		return;
	}
	toolTipShow.value = true;
};

const mouseleave = () => {
	if (!mergeInputPropsComputed.value.disabled) {
		return;
	}
	toolTipShow.value = false;
};
</script>

<style scoped lang="scss"></style>
