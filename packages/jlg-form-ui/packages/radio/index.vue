<template>
	<el-radio
		:model-value="props.modelValue"
		v-bind="mergeRadioPropsComputed"
		@update:model-value="
			(v) => {
				emits('update:modelValue', v);
			}
		"
	>
		<slot>
			{{ props.title }}
		</slot>
	</el-radio>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import { I_Jlg_Radio_Emits, T_Jlg_Radio_Props } from './type';
import { globalComponentConfig } from '../index';

defineOptions({
	name: 'JlgRadio',
});

const props = withDefaults(defineProps<T_Jlg_Radio_Props>(), {});

const attrs = useAttrs();

const emits = defineEmits<I_Jlg_Radio_Emits>();

const mergeRadioPropsComputed = computed(() => {
	return {
		...globalComponentConfig.radio,
		...props,
		...attrs,
	};
});
</script>

<style scoped lang="scss"></style>
