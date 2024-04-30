<template>
	<el-date-picker :model-value="props.modelValue" v-bind="props" @update:model-value="(v) => emits('update:modelValue', v)"> </el-date-picker>
</template>

<script setup lang="ts">
import { DatePickerProps } from 'element-plus';

defineOptions({
	name: 'JlgDatePicker',
});

const props = withDefaults(defineProps<DatePickerProps>(), {});

const emits = defineEmits<{
	(e: 'update:modelValue', v: DatePickerProps['modelValue']): void;
}>();
</script>

<style scoped lang="scss"></style>
