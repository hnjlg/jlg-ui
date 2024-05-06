<template>
	<jlg-tooltip v-bind="mergeTooltipPropsComputed">
		<el-select
			:model-value="props.modelValue"
			v-bind="mergeSelectPropsComputed"
			:placeholder="placeholderComputed"
			@update:model-value="updateModelValue"
		>
			<template v-for="(index, name) in slots">
				<slot v-if="name !== 'default'" :name="name" />
			</template>
			<slot>
				<el-option v-for="option in mergeSelectPropsComputed.optionOptions" :key="option.value" v-bind="option" />
			</slot>
		</el-select>
	</jlg-tooltip>
</template>

<script setup lang="ts">
import JlgTooltip from '../tooltip/index.vue';
import { globalComponentConfig } from '../index';
import { I_Jlg_Select_Emits, T_Jlg_Select_Props } from './type';
import { FormItemContext, formItemContextKey, useLocale } from 'element-plus';
import { useAttrs } from 'vue';

defineOptions({
	name: 'JlgSelect',
});

const slots = useSlots();

const props = withDefaults(defineProps<T_Jlg_Select_Props>(), {});

const attrs = useAttrs();

const emits = defineEmits<I_Jlg_Select_Emits>();

// formItem传递的context
const context: FormItemContext | undefined = inject(formItemContextKey);

const { t } = useLocale();

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

const mergeSelectPropsComputed = computed(() => {
	return {
		...globalComponentConfig.select,
		...props,
		...attrs,
	};
});

// select placeholder 默认值
const elSelectLabel = computed(() => t('el.select.placeholder'));

// 自定义处理placeholder
const placeholderComputed = computed(() => {
	if (mergeSelectPropsComputed.value.placeholder !== elSelectLabel.value) {
		return mergeSelectPropsComputed.value.placeholder;
	} else if (context) {
		return `请选择${context.label}`;
	} else {
		return '请选择';
	}
});

const updateModelValue = (v) => {
	emits('update:modelValue', v);
};
</script>

<style scoped></style>
