<template>
	<jlg-tooltip v-bind="mergeTooltipPropsComputed">
		<el-input
			:model-value="props.modelValue"
			v-bind="mergeInputPropsComputed"
			:placeholder="placeholderComputed"
			@update:model-value="updateModelValue"
			@focus="focusInput"
			@blur="blurInput"
		>
			<template v-for="(index, name) in slots">
				<slot :name="name" />
			</template>
		</el-input>
	</jlg-tooltip>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import { I_Jlg_Input_Emits, T_Jlg_Input_Props } from './type';
import { globalComponentConfig } from '../index';
import JlgTooltip from '../tooltip/index.vue';
import { FormItemContext, formItemContextKey } from 'element-plus';

defineOptions({
	name: 'JlgInput',
});

const slots = useSlots();

const props = withDefaults(defineProps<T_Jlg_Input_Props>(), {});

const emits = defineEmits<I_Jlg_Input_Emits>();

// formItem传递的context
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

const mergeInputPropsComputed = computed(() => {
	return {
		...globalComponentConfig.input,
		...props,
	};
});

// 自定义处理placeholder
const placeholderComputed = computed(() => {
	if (mergeInputPropsComputed.value.placeholder) {
		return mergeInputPropsComputed.value.placeholder;
	} else if (context && context.label) {
		const maxLengthText = props.maxlength ? `，最大可输入${props.maxlength}个字` : '';
		return `请输入${context.label}${maxLengthText}`;
	} else {
		return '请输入';
	}
});

const updateModelValue = (v) => {
	emits('update:modelValue', v);
};

const focusInput = (event) => {
	toolTipShow.value = true;
	emits('focus', event);
};

const blurInput = (event) => {
	toolTipShow.value = false;
	// 去除两端空格
	emits('update:modelValue', String(props.modelValue ?? '').trim());
	emits('blur', event);
};
</script>

<style scoped lang="scss"></style>
