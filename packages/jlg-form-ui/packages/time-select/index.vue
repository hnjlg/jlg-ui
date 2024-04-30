<template>
	<el-time-select :model-value="props.modelValue" v-bind="attrs" @update:model-value="(v) => emits('update:modelValue', v)" />
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import { I_TimeSelectProps } from './type';

defineOptions({
	name: 'JlgTimeSelect',
});

const attrs = useAttrs();

const props = withDefaults(defineProps<I_TimeSelectProps>(), {});

const emits = defineEmits<{
	(e: 'update:modelValue', v: I_TimeSelectProps['modelValue']): void;
}>();
</script>

<style scoped lang="scss"></style>
