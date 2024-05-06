<template>
	<el-radio-group
		:model-value="props.modelValue"
		v-bind="mergeRadioGroupPropsComputed"
		@update:model-value="
			(v) => {
				emits('update:modelValue', v);
			}
		"
	>
		<template v-for="(index, name) in slots">
			<slot v-if="name !== 'default'" :name="name" />
		</template>
		<slot>
			<jlg-radio v-for="(option, index) in mergeRadioGroupPropsComputed.radioOptions" :key="index" v-bind="option" />
		</slot>
	</el-radio-group>
</template>

<script setup lang="ts">
import { globalComponentConfig } from '../index';
import { T_Jlg_RadioGroup_Props, I_Jlg_RadioGroup_Emits } from './type';
import JlgRadio from '../radio/index.vue';
import { E_JlgForm_FormType, T_Add_Gather_Fn } from '../form/type';
import { FormItemContext, formItemContextKey } from 'element-plus';

defineOptions({
	name: 'JlgRadioGroup',
});

const props = withDefaults(defineProps<T_Jlg_RadioGroup_Props>(), {
	validateEvent: true,
});

const attrs = useAttrs();

const emits = defineEmits<I_Jlg_RadioGroup_Emits>();

const slots = useSlots();

const valueText = computed(() => String(props.modelValue ?? ''));

const mergeRadioGroupPropsComputed = computed(() => {
	return {
		...globalComponentConfig.radioGroup,
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
				type: E_JlgForm_FormType.单选框,
				...(mergeRadioGroupPropsComputed.value.gatherProps ?? {}),
			};
		},
	});
});
</script>

<style scoped lang="scss"></style>
