<template>
	<div>
		<jlg-form-item label="Input测试placeholder">
			<jlg-input
				v-model="input"
				:tool-tip-props="{
					effect: 'light',
				}"
			></jlg-input>
		</jlg-form-item>
		{{ input }}
		<jlg-form-item label="Select测试placeholder">
			<jlg-select v-model="select" placeholder="Select" size="large" style="width: 240px">
				<jlg-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
			</jlg-select>
		</jlg-form-item>
	</div>
</template>

<script setup lang="ts">
import JlgInput from '@pac/input/index.vue';
import JlgSelect from '@pac/select/index.vue';
import JlgOption from '@pac/option/index.vue';
import JlgFormItem from '@pac/form-item/index.vue';

import { ref } from 'vue';

defineOptions({
	name: 'FormBaseUseNotJson',
});

const input = ref();

const select = ref();

const options = [
	{
		value: 'Option1',
		label: 'Option1',
	},
	{
		value: 'Option2',
		label: 'Option2',
	},
	{
		value: 'Option3',
		label: 'Option3',
	},
	{
		value: 'Option4',
		label: 'Option4',
	},
	{
		value: 'Option5',
		label: 'Option5',
	},
];
</script>

<style scoped lang="scss"></style>
