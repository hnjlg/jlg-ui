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
			<jlg-radio v-for="option in mergeRadioGroupPropsComputed.radioOptions" :key="option.value" v-bind="option" />
		</slot>
	</el-radio-group>
</template>

<script setup lang="ts">
import { useAttrs, useSlots } from 'vue';
import { globalComponentConfig } from '../index';
import { T_Jlg_RadioGroup_Props, I_Jlg_RadioGroup_Emits } from './type';
import JlgRadio from '../radio/index.vue';

defineOptions({
	name: 'JlgRadioGroup',
});

const props = withDefaults(defineProps<T_Jlg_RadioGroup_Props>(), {
	validateEvent: true,
});

const attrs = useAttrs();

const emits = defineEmits<I_Jlg_RadioGroup_Emits>();

const slots = useSlots();

const mergeRadioGroupPropsComputed = computed(() => {
	return {
		...globalComponentConfig.radioGroup,
		...props,
		...attrs,
	};
});
</script>

<style scoped lang="scss"></style>
